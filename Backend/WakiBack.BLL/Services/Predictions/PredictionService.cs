

using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.IO;
using System.Net;
using System.Xml.Linq;
using WakiBack.DAL;
using WakiBack.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

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


            int sumMatchPredictions = 0;
            int sumMatchPredictionsFuture = 0;            
            int limitBetsPerDay = 5;
            int limitBetsPerDayFuture = 2;
            DateTime currentDate = DateTime.UtcNow.Date;
          

            var customer = await _unitOfWork.Customers.GetByUserEmailAsync(email);
            if (customer == null) return GetBusinessResponse(HttpStatusCode.NotFound, "Customer not found");

            //obtener todos, comparar fechas, depues hay llevar la consulta a la bd en refactor
            var resultPredictions = await _unitOfWork.Predictions.GetAllMyPredictionsWithTrackingAsync(customer.Id);

            if(resultPredictions is null) return GetBusinessResponse(HttpStatusCode.NotFound, "Predictions not found");


            var hasInvalidMatch = resultPredictions
            .Any(prediction => prediction.BetList!
            .Any(bet => bet.ListMatch!
            .Any(matchPrediction => model.ListMatch
            .Any(x => matchPrediction.Match!.Winner != "tbd" && matchPrediction.WinPrediction == null))));

            if (hasInvalidMatch)
            {
                return GetBusinessResponse(HttpStatusCode.BadRequest, "One or more matches are not open for betting.");

            }

            var listMatchForPrediction = new List<MatchPrediction>();
            var newBet = new Bet();
            double? combinedRatio = 0;



            //Calcular limites antes de agregar los partidos

            //Crea un Diccionario para contar cuantos partidos tienen la misma fecha

            var matchCountByDate = new Dictionary<DateTime, int>();

            foreach (var element in model.ListMatch)
            {

                //TODO cambiar fix date a base de datos tipo DateTime

                var match = await _unitOfWork.Matches.GetFirstOrDefaultMatchAsync(m => m.EntityPublicKey == element.MatchPublicKey);
                if (match == null)
                {
                    return GetBusinessResponse(HttpStatusCode.BadRequest,
                    $"Match with Public Key: {element.MatchPublicKey} not found");
                }


                var marchDatesArray = match.Date!.Split("/");

                var day = marchDatesArray[0];

                var month = marchDatesArray[1];

                var year = marchDatesArray[2];

                var resultNewDate = month + "/" + day + "/" + year + " " + match.Time;

                if (DateTime.TryParse(resultNewDate, out DateTime matchFixedDate))
                {                                                           
             
                    if (matchCountByDate.ContainsKey(matchFixedDate))
                    {                       
                        matchCountByDate[matchFixedDate]++;
                    }
                    else
                    {                       
                        matchCountByDate[matchFixedDate] = 1;
                    }

                }
                else
                {

                    return GetBusinessResponse(HttpStatusCode.BadRequest,
                        $"Invalid date format for Match with Public Key: {element.MatchPublicKey}");
                }                                
            }

            foreach (var entry in matchCountByDate)
            {
                var matchDate = entry.Key; // Fecha del partido
                var matchCount = entry.Value; // Número de partidos en esa fecha

                // Encontrar la predicción correspondiente a la fecha
                var predictionForCompareDate = resultPredictions
                    .FirstOrDefault(p => p.DateFirstBetOfDay.Date == matchDate.Date);

                if (predictionForCompareDate != null)
                {

                    var countPredictionsToday = predictionForCompareDate!.CountBets;
                    var countPredictionsTodayForFuture = predictionForCompareDate!.CountFutureBets;
                    var betsLeftForDay = limitBetsPerDay - countPredictionsToday;
                    var betsLeftForDayFuture = limitBetsPerDayFuture - countPredictionsTodayForFuture;

                    sumMatchPredictions = matchCount;


                    if (matchDate.Date != currentDate)
                    {
                        sumMatchPredictionsFuture = matchCount;
                    }



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
                    if (countPredictionsTodayForFuture + sumMatchPredictionsFuture > limitBetsPerDayFuture)
                    {
                        return GetBusinessResponse(HttpStatusCode.BadRequest,
                            $"You have reached the future bet limit for this day on Date {matchDate}. You have {betsLeftForDayFuture} bets left.");
                    }


                }
                else
                {
                    var countPredictionsToday = 0;
                    var countPredictionsTodayForFuture = 0;
                    var betsLeftForDay = limitBetsPerDay - countPredictionsToday;
                    var betsLeftForDayFuture = limitBetsPerDayFuture - countPredictionsTodayForFuture;

                    sumMatchPredictions = matchCount;


                    if (matchDate.Date != currentDate)
                    {
                        sumMatchPredictionsFuture = matchCount;
                    }



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
                    if (countPredictionsTodayForFuture + sumMatchPredictionsFuture > limitBetsPerDayFuture)
                    {
                        return GetBusinessResponse(HttpStatusCode.BadRequest,
                            $"You have reached the future bet limit for this day on Date {matchDate}. You have {betsLeftForDayFuture} bets left. You are trying to place {sumMatchPredictionsFuture} bets on the same day");
                    }
                }
            }
          



            foreach (var item in model.ListMatch)
            {

                var match = await _unitOfWork.Matches.GetFirstOrDefaultMatchAsync(m => m.EntityPublicKey == item.MatchPublicKey);
                if (match == null)
                {
                    return GetBusinessResponse(HttpStatusCode.BadRequest,
                    $"Match with Public Key: {item.MatchPublicKey} not found");
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
                    WinnerPrediction = item.WinnerPrediction,
                    RatioOfPrediction = item.WinnerPrediction switch
                    {
                        "away" => away != 0 ? away : 0,
                        "home" => home != 0 ? home : 0,
                        "draw" => draw != 0 ? draw : 0
                    },
                    EntityPublicKey = Guid.NewGuid()
                };
               

                listMatchForPrediction.Add(matchForPrediction);

                combinedRatio = combinedRatio == 0 ? matchForPrediction.RatioOfPrediction :
                combinedRatio * matchForPrediction.RatioOfPrediction;                                  
            
            }

            foreach (var entry in matchCountByDate)
            {
                var matchDate = entry.Key;
                var matchCount = entry.Value;

                // Encontrar la predicción correspondiente a la fecha
                var predictionForCompareDate = resultPredictions
                    .FirstOrDefault(p => p.DateFirstBetOfDay.Date == matchDate.Date);

                if (predictionForCompareDate == null)
                {
                    predictionForCompareDate = new Prediction()
                    {
                        DateFirstBetOfDay = matchDate.Date,
                        BetList = new List<Bet>(),
                        CustomerEF = customer,
                        EntityPublicKey = Guid.NewGuid(),
                        ExistPreviously = false
                    };
                }
                else
                {
                    predictionForCompareDate.ExistPreviously = true;
                }

                predictionForCompareDate.CountBets += matchCount;

                if (matchDate.Date != currentDate.Date)
                {
                    predictionForCompareDate.CountFutureBets += matchCount;
                }

                if (predictionForCompareDate.ExistPreviously)
                {
                    await _unitOfWork.Predictions.UpdateAsync(predictionForCompareDate);
                }
                else
                {
                    await _unitOfWork.Predictions.AddAsyncSaveChanges(predictionForCompareDate);
                }



            }


            var predictionForToday = resultPredictions.FirstOrDefault(p => p.DateFirstBetOfDay.Date == currentDate.Date);


            if (predictionForToday == null)
            {
                predictionForToday = new Prediction()
                {
                    DateFirstBetOfDay = currentDate.Date,
                    BetList = new List<Bet>(),
                    CustomerEF = customer,
                    EntityPublicKey = Guid.NewGuid(),
                    ExistPreviously = false
                };
            }
            else
            {
                predictionForToday.ExistPreviously = true;
            }


            newBet.ListMatch = listMatchForPrediction;
            newBet.EntityPublicKey = Guid.NewGuid();
            newBet.RatioOfPredictionCombined = combinedRatio;
            newBet.CheckforWin = false;
            newBet.Win = "tbd";

            predictionForToday.BetList!.Add(newBet);

            if (predictionForToday.ExistPreviously)
            {
                await _unitOfWork.Predictions.UpdateAsync(predictionForToday);
                await _unitOfWork.SaveAsync();
            }
            else
            {
                await _unitOfWork.Predictions.AddAsync(predictionForToday);
                await _unitOfWork.SaveAsync();
            }

            return GetBusinessResponse(HttpStatusCode.OK, predictionForToday.EntityPublicKey.ToString("N"), null, null);



        }

        public async Task<IEnumerable<ShowPredictionVM>> GetAllMyPredictions(string email)
        {
            var customer = await _unitOfWork.Customers.GetByUserEmailAsync(email);
                        
            var items = await _unitOfWork.Predictions.GetAllMyPredictionsAsync(customer.Id);          
         
            return _mapper.Map<IEnumerable<ShowPredictionVM>>(items);

        }


    }
}
