


using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net;
using WakiBack.DAL;
using WakiBack.Models;
using WakiBack.Models.APIRequest;

namespace WakiBack.BLL
{
    public class PredictionDataService : IPredictionDataService
    {
        private readonly IConfiguration _configuration;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<PredictionDataService> _logger;         

        public PredictionDataService(IConfiguration configuration, IUnitOfWork unitOfWork, ILogger<PredictionDataService> logger)
        {
            _configuration = configuration;
            _unitOfWork = unitOfWork;
            _logger = logger;            
        }

      
        public async Task SeedDatabase()
        {
           
            var check = await _unitOfWork.Leagues.GetAllAsync();            
                
            bool exists = check.Any(c => c.DisplayName != null);
            if (!exists)
            {
                var leagues = await GetAllFromAPI();
                if (leagues != null && leagues.Any())
                {
                    var leagueList = await GetAllFromAPI();

                    await _unitOfWork.Leagues.AddRangeAsync(leagueList);
                    await _unitOfWork.SaveAsync();
                    _logger.LogInformation($"The database creation process has successfully completed.");

                }
                else _logger.LogInformation("Failed to data from external API");
            }
            else _logger.LogInformation("The database has already been created.");
        }

        public async Task UpdateDatabase()
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
                            dbMatch.Home = apiMatch.Home;
                            dbMatch.Away = apiMatch.Away;
                            dbMatch.Winner = apiMatch.Winner;
                            dbMatch.OddsAPI = apiMatch.OddsAPI;
                            dbMatch.HomeFtGoals = apiMatch.HomeFtGoals;
                            dbMatch.AwayFtGoals = apiMatch.AwayFtGoals;
                                        
                            await _unitOfWork.Matches.UpdateData(dbMatch); // Actualización en la base de datos
                            _logger.LogInformation($"Se actualizo el match con id : {dbMatch.MatchId}");
                        }
                    }

                    await _unitOfWork.SaveAsync();
                }
                else _logger.LogInformation("Failed to data from external API");
            }
            else _logger.LogInformation("The initial database seed has not been created yet.");
       
        }
              
            
           
     

        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         *                                                                                             *
         * Obtiene una lista de Ligas con los partidos correspondientes de una API externa             *     
         *                                                                                             *            
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
        public async Task<List<LeagueAPI>> GetAllFromAPI()
        {

            var listLeagueAPI = new List<LeagueAPI>();            

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
                                        StageList = item.Stage != null ? ValidationHelper.CleanStage(item.Stage) : null,
                                       
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

            public static List<StageAPI> CleanStage(List<Stage> stage)
            {
                var cleanListStage = new List<StageAPI>();

                foreach (var element in stage)
                {
                    var item = new StageAPI()
                    {                        
                        StageId = element.StageId,
                        Name = string.IsNullOrEmpty(element.StageName) ? null : element.StageName,
                        IsActive = string.IsNullOrEmpty(element.IsActive) ? null : element.IsActive,
                        MatchList = element.Matches != null ? ValidationHelper.CleanMatches(element) : null
                    };

                    cleanListStage.Add(item);
                }
                return cleanListStage;
            }

            public static List<MatchAPI> CleanMatches(Stage stage)
            {
                var cleanListMatches = new List<MatchAPI>();

                foreach (var element in stage!.Matches!)
                {
                    var item = new MatchAPI()
                    {
                        MatchId = element.Id,
                        Date = string.IsNullOrEmpty(element.Date) ? null : element.Date,
                        Home = string.IsNullOrEmpty(element.Teams!.Home!.Name) ? null : element.Teams.Home.Name,
                        Away = string.IsNullOrEmpty(element.Teams!.Away!.Name) ? null : element.Teams.Away.Name,
                        Winner = string.IsNullOrEmpty(element.Winner) ? null : element.Winner,
                        OddsAPI = new OddsAPI(){ Home = element.Odds!.MatchWinner!.Home, Away = element.Odds!.MatchWinner!.Away, Draw = element.Odds!.MatchWinner!.Draw },
                        HomeFtGoals = element.Goals!.HomeFtGoals,
                        AwayFtGoals = element.Goals!.AwayFtGoals,
                        EntityPublicKey = Guid.NewGuid()
                    };

                    cleanListMatches.Add(item);
                }
                
                return cleanListMatches;
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
