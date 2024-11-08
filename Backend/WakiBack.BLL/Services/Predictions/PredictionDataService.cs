


using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net;
using System.Text.RegularExpressions;
using WakiBack.DAL;
using WakiBack.Models;
using WakiBack.Models.APIRequest;

namespace WakiBack.BLL
{
    public class PredictionDataService : BaseManagerGF, IPredictionDataService
    {
        private readonly IConfiguration _configuration;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<PredictionDataService> _logger;         


        public PredictionDataService(IConfiguration configuration, IUnitOfWork unitOfWork, ILogger<PredictionDataService> logger, IHttpContextAccessor httpContextAccessor) : base (httpContextAccessor)
        {
            _configuration = configuration;
            _unitOfWork = unitOfWork;
            _logger = logger;            
        }

      
        public async Task<BusinessResponse> SeedDatabase()
        {

            var check = await _unitOfWork.Leagues.GetAllAsync();

            bool exists = check.Any(c => c.DisplayName != null);
            if (!exists)
            {
                var leagues = await GetAllFromAPI();
                if (leagues != null && leagues.Any())
                {                       
                
                    await _unitOfWork.Leagues.AddRangeAsync(leagues);
                    await _unitOfWork.SaveAsync();
                    _logger.LogInformation($"The database creation process has successfully completed.");

                }
                else _logger.LogInformation("Failed to get data from external API");
                return GetBusinessResponse(HttpStatusCode.NotFound, "Failed to get data from external API");
            }
            else _logger.LogInformation("The database has already been created.");
            return GetBusinessResponse(HttpStatusCode.BadRequest, "The database has already been created.");
        }

        public async Task<BusinessResponse> UpdateDatabase()
        {
            _logger.LogInformation("The credit card database update process is in progress.");

           // var checkLeague = await _unitOfWork.Leagues.GetAllAsync();
           // var leagueList = await GetAllFromAPI();
            
            //comprobar si son del mismo año sino updateRange List if ( checkLeague.Year y LeagueList, con LINQ) Para que se actualice cuando existan nuevos stages, nuevas temporadas


            var check = await _unitOfWork.Matches.GetAllAsync();

            if (check.Any(c => c.DisplayName != null))
            {
                var leagueList = await GetAllFromAPI();

                if (leagueList != null && leagueList.Any())
                {
                    var matchesToUpdate = check
                     .Where(dbMatch => leagueList
                     .Where(league => league.StageList != null)  // Filtrar StageList no nulas
                     .SelectMany(league => league.StageList!)    // Usar StageList no nulas
                     .Where(stage => stage.MatchList != null)    // Filtrar MatchList no nulas
                     .SelectMany(stage => stage.MatchList!)      // Usar MatchList no nulas
                     .Any(apiMatch => apiMatch.MatchId == dbMatch.MatchId &&
                                      apiMatch.Winner != "tbd" && dbMatch.Winner == "tbd"))
                     .ToList();

                    if (matchesToUpdate.Count == 0 ) _logger.LogInformation("No Updates");
                    

                    var betToPay = await _unitOfWork.Bets.GetAllBetsForCheckWin();
                    var customers = await _unitOfWork.Customers.GetAllAsync();

                    // Crear un Lookup de predicciones por public key de los partidos
                    var predictionsLookup = betToPay
                        .SelectMany(bet => bet.ListMatch!, (bet, prediction) => new { bet, prediction })
                        .ToLookup(bp => bp.prediction.MatchPublicKey, bp => new { bp.bet, bp.prediction });


                    // Actualizar los matches que necesitan ser modificados
                    foreach (var dbMatch in matchesToUpdate)
                    {
                        var apiMatch = leagueList
                            .Where(league => league.StageList != null)
                            .SelectMany(league => league.StageList!)
                            .Where(stage => stage.MatchList != null)
                            .SelectMany(stage => stage.MatchList!)
                            .FirstOrDefault(m => m.MatchId == dbMatch.MatchId);

                        if (apiMatch != null && dbMatch.Winner == "tbd" && apiMatch.Winner != "tbd")
                        {
                               

                            dbMatch.StageAPI = apiMatch.StageAPI;
                            dbMatch.TeamsAPI = apiMatch.TeamsAPI;                            
                            dbMatch.Winner = apiMatch.Winner;
                            dbMatch.OddsAPI = apiMatch.OddsAPI;
                            dbMatch.HomeFtGoals = apiMatch.HomeFtGoals;
                            dbMatch.AwayFtGoals = apiMatch.AwayFtGoals;
                            dbMatch.Time = apiMatch.Time;
                                        
                            await _unitOfWork.Matches.UpdateData(dbMatch); // Actualización en la base de datos
                            _logger.LogInformation($"Se actualizo el match con id : {dbMatch.MatchId}");                           
                        }

                        if (predictionsLookup.Contains(dbMatch.EntityPublicKey))
                        {
                            // Obtener todas las predicciones de apuestas asociadas a este partido
                            var relatedPredictions = predictionsLookup[dbMatch.EntityPublicKey];
                            var betsToUpdate = await _unitOfWork.Bets.GetAllAsync();

                            foreach (var bp in relatedPredictions)
                            {
                                var countMatchPredictions = bp.bet.ListMatch!.Count();
                                // Evaluar si el Winner del partido coincide con la predicción del usuario
                                if (bp.prediction.WinnerPrediction == dbMatch.Winner)
                                {                                    
                                    bp.prediction.WinPrediction = "Win";                                    
                                }
                                else
                                {
                                    bp.prediction.WinPrediction = "Lose";                                    
                                }

                                var winningPredictionsCount = bp.bet.ListMatch!.Count(m => m.WinPrediction == "Win");
                                var losePredictionsCount = bp.bet.ListMatch!.Count(m => m.WinPrediction == "Lose");
                                var totalPredictionsCount = winningPredictionsCount + losePredictionsCount;

                                // Comparar el conteo de "Win" con el total de MatchPredictions
                                if (winningPredictionsCount == countMatchPredictions && bp.bet.CheckforWin != true)
                                {
                                    bp.bet.Win = "Win"; // Asignar "Win" en bet si todos coinciden
                                    bp.bet.CheckforWin = true;
                                    bp.bet.Prediction!.CustomerEF!.Points += Convert.ToInt32(bp.bet.RatioOfPredictionCombined!.Value * 10 * bp.bet.ListMatch!.Count());
                                }
                                else if(totalPredictionsCount == countMatchPredictions && bp.bet.CheckforWin != true)
                                {
                                    bp.bet.Win = "Lose"; // Opcional: Asignar "Lose" si no todos coinciden
                                    bp.bet.CheckforWin = true;
                                }

                                betsToUpdate.ToList().Add(bp.bet);

                            }
                            //guardar lista de apuestas actualizadas
                            await _unitOfWork.Bets.UpdateListBets(betsToUpdate.ToList());
                        }

                    }

                    await _unitOfWork.SaveAsync();
                    return GetBusinessResponse(HttpStatusCode.OK, "Updated Succesfully");
                }
                else _logger.LogInformation("Failed to get data from external API");
                return GetBusinessResponse(HttpStatusCode.NotFound, "Failed to get data from external API");
            }
            else _logger.LogInformation("The initial database seed has not been created yet.");
            return GetBusinessResponse(HttpStatusCode.BadRequest, "The initial database seed has not been created yet.");

        }
              
            
           
     

        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         *                                                                                             *
         * Obtiene una lista de Ligas con los partidos correspondientes de una API externa             *     
         *                                                                                             *            
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
        public async Task<List<LeagueAPI>> GetAllFromAPI()
        {
           
            var listLeagueAPI = new List<LeagueAPI>();
            var existingTeamAPIList = await _unitOfWork.TeamAPI.GetAllAsync();
            var teamAPIList = new List<TeamAPI>();
            var processedTeamIds = new HashSet<int>(existingTeamAPIList.Select(t => t.TeamId));
            var teamDbList  = existingTeamAPIList.ToList();

            var soccerAPIBaseUrl = _configuration["SoccerAPIBaseUrl"];
            var soccerAPIKey = _configuration["SoccerAPIKey"];

            using (var requestSoccerAPI = new HttpClient(new HttpClientHandler { AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate }))
            {
                requestSoccerAPI.BaseAddress = new Uri(soccerAPIBaseUrl!);
                requestSoccerAPI.DefaultRequestHeaders.Add("Accept-Encoding", "gzip, deflate");

                foreach (var element in LeagueIdList)
                {                    

                    var responseSoccerAPI = await requestSoccerAPI.GetAsync($"matches/?league_id={element}&{soccerAPIKey}");

                    if (responseSoccerAPI.IsSuccessStatusCode)
                    {
                        var jsonResponseSoccerAPI = await responseSoccerAPI.Content.ReadAsStringAsync();

                        // Verifica que la respuesta no sea nula o vacía antes de deserializar
                        if (!string.IsNullOrEmpty(jsonResponseSoccerAPI))
                        {
                            // Deserializa la respuesta JSON en la lista de objetos Welcome
                            var resultSoccerAPI = JsonConvert.DeserializeObject<List<Welcome>>(jsonResponseSoccerAPI);

                            // Verifica que la deserialización haya sido exitosa
                            if (resultSoccerAPI != null && resultSoccerAPI.Count > 0)
                            {
                                //Mapear aca
                                foreach (var item in resultSoccerAPI) 
                                {

                                    var mappedResult = new LeagueAPI()
                                    {
                                        Name = string.IsNullOrEmpty(item.LeagueName) ? null : item.LeagueName,
                                        LeagueId = item.LeagueId,
                                        Country = item.Country != null ? ValidationHelper.CleanCountry(item.Country) : null,
                                        StageList = item.Stage != null ? ValidationHelper.CleanStage(item, processedTeamIds, teamAPIList, teamDbList) : null,
                                       
                                    };

                                    listLeagueAPI.Add(mappedResult);
                                }
                            }
                            else
                            {
                                _logger.LogInformation("Error: No se pudo deserializar el JSON.");
                            }
                        }
                        else
                        {
                            _logger.LogInformation("Advertencia: La respuesta JSON está vacía.");
                            continue;
                        }
                    }
                    else
                    {
                        _logger.LogInformation($"Error en la solicitud: {responseSoccerAPI.StatusCode}");
                    }
                    
                }
            }

            await _unitOfWork.TeamAPI.AddRangeAsync(teamAPIList);
            await _unitOfWork.SaveAsync();

            return listLeagueAPI!;
        }

        public static class ValidationHelper
        {
            public static CountryAPI CleanCountry (Country country)
            {                               
                var cleanCountry = new CountryAPI()
                {                                      
                    CountryId = country.Id,
                    Name = string.IsNullOrEmpty(country.Name) ? null : country.Name,                    
                };               
                
                return cleanCountry;
            }

            public static List<StageAPI> CleanStage(Welcome welcome, HashSet<int> processedTeamIds, List<TeamAPI> teamAPIList, List<TeamAPI> teamDbList)
            {
                var cleanListStage = new List<StageAPI>();

                foreach (var element in welcome.Stage!)
                {
                    var item = new StageAPI()
                    {                        

                        StageId = element.StageId,
                        Name = string.IsNullOrEmpty(element.StageName) ? null : element.StageName,
                        IsActive = string.IsNullOrEmpty(element.IsActive) ? null : element.IsActive,
                        MatchList = element.Matches != null ? ValidationHelper.CleanMatches(element, welcome, processedTeamIds, teamAPIList, teamDbList) : null
                    };

                    cleanListStage.Add(item);
                }
                return cleanListStage;
            }

            public static List<MatchAPI> CleanMatches(Stage stage, Welcome welcome, HashSet<int> processedTeamIds, List<TeamAPI> teamAPIList, List<TeamAPI> teamDbList)
            {
                var cleanListMatches = new List<MatchAPI>();

                foreach (var element in stage!.Matches!)
                {
                    
                    var item = new MatchAPI()
                    {
                        MatchId = element.Id,
                        Date = string.IsNullOrEmpty(element.Date) ? null : element.Date,
                        Time = string.IsNullOrEmpty(element.Time) ? null : element.Time,
                        TeamsAPI = new TeamsAPI()
                        {
                            HomeAPI = new HomeAPI()
                            {
                                TeamAPI = element.Teams!.Home != null ? ValidationHelper.CleanTeamHome(element.Teams.Home, processedTeamIds, teamAPIList, teamDbList).TeamAPI : null,
                            },
                            AwayAPI = new AwayAPI()
                            {
                                TeamAPI = element.Teams.Away != null ? ValidationHelper.CleanTeamAway(element.Teams.Away, processedTeamIds, teamAPIList, teamDbList).TeamAPI : null
                            }
                        },                                              
                        Winner = string.IsNullOrEmpty(element.Winner) ? null : element.Winner,
                        OddsAPI = new OddsAPI(){ Home = element.Odds!.MatchWinner!.Home, Away = element.Odds!.MatchWinner!.Away, Draw = element.Odds!.MatchWinner!.Draw },
                        HomeFtGoals = element.Goals!.HomeFtGoals,
                        AwayFtGoals = element.Goals!.AwayFtGoals,
                        EntityPublicKey = Guid.NewGuid(),
                        LeagueId = welcome.LeagueId,
                        LeagueName = welcome.LeagueName
                    };

                    cleanListMatches.Add(item);
                }
                
                return cleanListMatches;
            }
         

            public static HomeAPI CleanTeamHome(Team team, HashSet<int> processedTeamIds, List<TeamAPI> teamAPIList, List<TeamAPI> teamDbList)
            {
                var homeResult = new HomeAPI();

                //llamar teams get all para ver si esta repetido por el nombre function elike if
                if (team.Id.HasValue && !processedTeamIds.Contains(team.Id.Value))
                {
                    var newteam = new TeamAPI
                    {
                        TeamId = team.Id.Value,
                        Name = string.IsNullOrEmpty(team.Name) ? null : team.Name,
                    };
                    teamAPIList.Add(newteam);
                    processedTeamIds.Add(team.Id.Value); // Añadir el nuevo TeamId al HashSet

                    homeResult.TeamAPI = newteam;

                    return homeResult;
                }
                else
                {

                    var teamResult  = teamDbList.FirstOrDefault(t => t.TeamId == team.Id!.Value);
                    if (teamResult == null) teamResult = teamAPIList.FirstOrDefault(t => t.TeamId == team.Id!.Value);

                    homeResult.TeamAPI = teamResult;

                    return homeResult;
                    
                }                    
                
            }

            public static AwayAPI CleanTeamAway(Team team, HashSet<int> processedTeamIds, List<TeamAPI> teamAPIList, List<TeamAPI> teamDbList)
            {
                var awayResult = new AwayAPI();

                //llamar teams get all para ver si esta repetido por el nombre function elike if
                if (team.Id.HasValue && !processedTeamIds.Contains(team.Id.Value))
                {
                    var newteam = new TeamAPI
                    {
                        TeamId = team.Id.Value,
                        Name = string.IsNullOrEmpty(team.Name) ? null : team.Name,
                    };
                    teamAPIList.Add(newteam);
                    processedTeamIds.Add(team.Id.Value); // Añadir el nuevo TeamId al HashSet

                    awayResult.TeamAPI = newteam;

                    return awayResult;
                }
                else
                {
                    
                    var teamResult = teamDbList.FirstOrDefault(t => t.TeamId == team.Id!.Value);
                    if (teamResult == null) teamResult = teamAPIList.FirstOrDefault(t => t.TeamId == team.Id!.Value);

                    awayResult.TeamAPI = teamResult;

                    return awayResult;

                }

            }


        }



        public List<string> LeagueIdList = new List<string>
        {
            //LeagueId      //League Name

            "297",          // La Liga (España) 
            "228",        // Premier (Inglaterra)                    
            "241",        // Bundesliga (Alemania)
            "235",        // Ligue 1 (Francia)
            "215",        // Serie A (Brasil)                    
            "206",        // Liga Argentina (Argentina)
        };
    }
    
}
