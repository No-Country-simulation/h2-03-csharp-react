
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.SqlServer.Server;
using System;
using System.Globalization;
using System.Net;
using System.Runtime.InteropServices;
using WakiBack.BLL;
using WakiBack.Models;

namespace WakiBack.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    public class PredictionController : BaseAPI
    {
        private readonly IMatchService _matchService;
        private readonly ILogger<PredictionController> _logger;
        private readonly ILeagueService _leagueService;
        private readonly IPredictionService _predictionService;

        public PredictionController(IPredictionService predictionService, IMatchService matchService, ILogger<PredictionController> logger, ILeagueService leagueService)
        {
            _predictionService = predictionService;
            _matchService = matchService;
            _logger = logger;
            _leagueService = leagueService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMatchesFromLeagueForPredictionsPaginated([FromQuery] PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? league_id)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                model.Items = await _matchService.GetAllPaginatedAsync(model, league_id);

                //provisional, llevar el filtro de date a la bd cambiar tipo string por DateTime, refactor
                DateTime today = DateTime.UtcNow.Date;
                DateTime nextWeek = today.AddDays(7);

                var cultureInfo = new System.Globalization.CultureInfo("es-ES"); // o la cultura que corresponda al formato DD/MM/YYYY
                model.Items = model.Items
                    .Where(m => DateTime.TryParseExact(m.Date, "dd/MM/yyyy", cultureInfo, System.Globalization.DateTimeStyles.None, out DateTime parsedDate)
                                && parsedDate >= today
                                && parsedDate <= nextWeek
                                && m.OddsAPI!.Home != null)
                    .ToList();


                if (model.Items.Count() == 0) return NotFound("No matches were found with the provided search parameters. Please review the criteria and try again.");

                return Ok(model);
            }
            catch (Exception ex)
            {
                var log = $"{ex.Message} {ex.InnerException?.Message}";
                _logger.LogInformation(log);

                return Problem(ex.Message);
            }
        }

        [HttpGet]

        public async Task<IActionResult> GetAllLeagues()
        {
            try
            {

                var result = await _leagueService.GetAllLeagues();

                if (result.Count() == 0) return NotFound("No leagues were found.");

                return Ok(result);
            }
            catch (Exception ex)
            {
                var log = $"{ex.Message} {ex.InnerException?.Message}";
                _logger.LogInformation(log);

                return Problem(ex.Message);
            }


        }


        //Test deploy Time Zone
        [HttpGet]

        public async Task<test> GetTimeHourTestServer()
        {
            var matchDateTest = "04/11/2024";

            var time = "00:00";

            var marchDatesArray = matchDateTest.Split("/");

            var day = marchDatesArray[0];

            var month = marchDatesArray[1];

            var year = marchDatesArray[2];

            var resultNewDate = month + "/" + day + "/" + year + " " + time;

            var esaa = DateTime.TryParse(resultNewDate, out DateTime matchTime);



                DateTime currentDate = DateTime.UtcNow.Date;
            bool test = false;

            if (DateTime.Compare(matchTime.Date, currentDate) == 0)
            {
                test = true;
            }

            var testObject = new DateTime[]
            {
                currentDate,
                matchTime,
            };


            var testVM = new test()
            {
                Dates = testObject,
                testBool = test
            };            



            return testVM;
           

        }


        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Customer")]
        public async Task<IActionResult> CreateBet(CreateBetVM model)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    var createResponse = await _predictionService.CreateBet(model, RequestEmail(User));

                    if (!createResponse.Success)
                    {
                        if (createResponse.StatusCode.Equals(HttpStatusCode.NotFound)) return NotFound(createResponse.Message);

                        if (createResponse.StatusCode.Equals(HttpStatusCode.BadRequest)) return BadRequest(createResponse.Message);
                    }                 

                    var response = model.CreateResponse(createResponse.PublicKey!);

                    return Ok(response);
                }
                catch (Exception ex)
                {
                    return Problem(detail: $"Server error: {ex.Message}");
                }
            }
            return BadRequest();
         

        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Customer")]
        public async Task<IActionResult> GetAllMyPredictionsOfDay()
        {

            if (ModelState.IsValid)
            {
                try
                {
                    var createResponse = await _predictionService.GetAllMyPredictions(RequestEmail(User));

                    if ( createResponse.Count() == 0) return NotFound("There are no predictions available.");
                    
                    return Ok(createResponse);
                }
                catch (Exception ex)
                {
                    return Problem(detail: $"Server error: {ex.Message}");
                }
            }
            return BadRequest();
        }

        public class test
        {
            public DateTime[] Dates { get; set; }
            public bool testBool { get; set; }
        }
    }
}