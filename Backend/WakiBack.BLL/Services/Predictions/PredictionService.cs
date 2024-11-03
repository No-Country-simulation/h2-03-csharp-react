

using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Net;
using WakiBack.DAL;
using WakiBack.Models;

namespace WakiBack.BLL
{
    public class PredictionService : BaseManagerGF, IPredictionService
    {
        private readonly ILogger<PredictionService> _logger;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public PredictionService( IUnitOfWork unitOfWork, ILogger<PredictionService> logger, IHttpContextAccessor httpContextAccessor, IMapper mapper) : base (httpContextAccessor)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        

        public async Task<BusinessResponse> CreateBet(CreateBetVM model, string email)
        {
            if (model.ListMatch!.Count != 0 && model.ListMatch is null) return GetBusinessResponse(HttpStatusCode.BadRequest, "There are no Matchs predictions on the request");

            var duplicatedKeys = model.ListMatch
           .GroupBy(match => match.MatchPublicKey)
           .Where(group => group.Count() > 1)
           .Select(group => group.Key);

            if (duplicatedKeys.Any()) return GetBusinessResponse(HttpStatusCode.BadRequest, "You have already placed a bet on this team in the same combined bet.");


            var sumMatchPredictions = model.ListMatch.Count;
            int sumMatchPredictionsFuture = 0;
            var todayDate = DateTime.Now;
            int limitBetsPerDay = 5;
            int limitBetsPerDayFuture = 2;

            var customer = await _unitOfWork.Customers.GetByUserEmailAsync(email);
            if (customer == null) return GetBusinessResponse(HttpStatusCode.NotFound, "Customer not found");

            //obtener todos, comparar fechas, depues hay llevar la consulta a la bd en refactor
            var resultPredictions = await _unitOfWork.Predictions.GetAllPredictionsAsync();
            
            var predictionForDay = resultPredictions.FirstOrDefault(p => p.DateFirstBetOfDay.Date == todayDate.Date && p.CustomerEFId == customer!.Id );

            if (predictionForDay == null)
            {
                predictionForDay = new Prediction()
                {
                    DateFirstBetOfDay = todayDate,
                    BetList = new List<Bet>(),
                    CustomerEF = customer,
                    EntityPublicKey = Guid.NewGuid(),
                    ExistPreviously = false                    
                };
            }
            else 
            {
                predictionForDay.ExistPreviously = true;
            }

            var hasInvalidMatch = resultPredictions
            .Any(prediction => prediction.BetList!
            .Any(bet => bet.ListMatch!
            .Any(matchPrediction => model.ListMatch
            .Any(x => matchPrediction.Match!.Winner != "tbd" && matchPrediction.WinPrediction == null))));

            if (hasInvalidMatch)
            {
                return GetBusinessResponse(HttpStatusCode.BadRequest, "One or more matches are not open for betting.");

            }       


            var countPredictionsToday = predictionForDay!.CountBets;
            var countPredictionsTodayForFuture = predictionForDay!.CountFutureBets;
            var betsLeftForDay = limitBetsPerDay - countPredictionsToday;
            var betsLeftForDayFuture = limitBetsPerDayFuture - countPredictionsTodayForFuture;

            if (countPredictionsToday >= limitBetsPerDay)
            {
                return GetBusinessResponse(HttpStatusCode.BadRequest,
                "You have exceeded the daily limit of bets (5). If you wish to increase your limit, please consider upgrading your subscription.");
            }
            if (countPredictionsToday + sumMatchPredictions > limitBetsPerDay)
            {
                return GetBusinessResponse(HttpStatusCode.BadRequest,
                 $"The total of your daily bets, including your current bets, will exceed the limit of 5. You have {betsLeftForDay} bets left for today. If you wish to increase your limit, please consider upgrading your subscription.");
            }

            

            foreach (var element in model.ListMatch!)
            {
                var match = await _unitOfWork.Matches.GetFirstOrDefaultMatchAsync(m => m.EntityPublicKey == element.MatchPublicKey);
                if (match == null)
                {
                    return GetBusinessResponse(HttpStatusCode.BadRequest,
                    $"Match with Public Key: {element.MatchPublicKey} not found");
                }

                if (DateTime.TryParse(match.Date, out DateTime matchDate))
                {
                    
                    if (matchDate.Date != DateTime.Today)
                    {
                        sumMatchPredictionsFuture++;
                    }
                }
                else
                {
                    return GetBusinessResponse(HttpStatusCode.BadRequest,
                        $"Invalid date format for Match with Public Key: {element.MatchPublicKey}");
                }

            }
       

            if (countPredictionsTodayForFuture + sumMatchPredictionsFuture > limitBetsPerDayFuture)
            {
                return GetBusinessResponse(HttpStatusCode.BadRequest,
                    $"You have reached the future bet limit. You can only place {betsLeftForDayFuture} more future bet(s) today. The rest of your bets must be on matches scheduled for today.");
            }

            var listMatchForPrediction = new List<MatchPrediction>();
            var newBet = new Bet();
            double? combinedRatio = 0; 

            foreach (var element in model.ListMatch!)
            {
                var match = await _unitOfWork.Matches.GetFirstOrDefaultMatchAsync(m => m.EntityPublicKey == element.MatchPublicKey);
                if (match == null)
                {
                    return GetBusinessResponse(HttpStatusCode.BadRequest,
                    $"Match with Public Key: {element.MatchPublicKey} not found");
                }
                
                double? away = 0;
                double? home = 0;
                double? draw = 0;

                away = match.OddsAPI?.Away;
                home = match.OddsAPI?.Home;
                draw = match.OddsAPI?.Draw;


                var matchForPrediction = new MatchPrediction()
                {

                    Bet = newBet,
                    Match = match,
                    MatchPublicKey = match!.EntityPublicKey,
                    WinnerPrediction = element.WinnerPrediction,
                    RatioOfPrediction = element.WinnerPrediction switch
                    {
                        "away" => away != 0 ? away : 0,
                        "home" => home != 0 ? home : 0,
                        "draw" => draw != 0 ? draw : 0
                    },
                    EntityPublicKey = Guid.NewGuid()
                };


                predictionForDay.CountBets ++;
              
               if (DateTime.TryParse(match.Date, out DateTime matchDate))
               {                        
                   if (predictionForDay.DateFirstBetOfDay.Date != matchDate.Date)
                   {
                       predictionForDay.CountFutureBets++;
                   }
               }
                listMatchForPrediction.Add(matchForPrediction);
                combinedRatio = combinedRatio == 0 ? matchForPrediction.RatioOfPrediction :
                combinedRatio * matchForPrediction.RatioOfPrediction;                
            }

            newBet.ListMatch = listMatchForPrediction;
            newBet.EntityPublicKey = Guid.NewGuid();
            newBet.RatioOfPredictionCombined = combinedRatio;
            newBet.CheckforWin = false;
            newBet.Win = "tbd";

            predictionForDay.BetList!.Add(newBet);

            if (predictionForDay.ExistPreviously)
            {
                await _unitOfWork.Predictions.UpdateAsync(predictionForDay);
                await _unitOfWork.SaveAsync();
            }
            else
            {
                await _unitOfWork.Predictions.AddAsync(predictionForDay);
                await _unitOfWork.SaveAsync();
            }
            
            return GetBusinessResponse(HttpStatusCode.OK, predictionForDay.EntityPublicKey.ToString("N"), null, null);


        }

        public async Task<IEnumerable<ShowPredictionVM>> GetAllMyPredictions(string email)
        {
            var customer = await _unitOfWork.Customers.GetByUserEmailAsync(email);
                        
            var items = await _unitOfWork.Predictions.GetAllMyPredictionsAsync(customer.Id);          
         
            return _mapper.Map<IEnumerable<ShowPredictionVM>>(items);

        }


    }
}
