
using Microsoft.AspNetCore.Mvc;
using WakiBack.BLL;
using WakiBack.Models;

namespace WakiBack.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Dev,Admin")]
    public class PredictionController : ControllerBase
    {
        private readonly IPredictionDataService _predictionDataService;
        private readonly IMatchService _matchService;
        private readonly ILogger<PredictionController> _logger;
        private readonly ILeagueService _leagueService;

        public PredictionController(IPredictionDataService predictionDataService, IMatchService matchService, ILogger<PredictionController> logger, ILeagueService leagueService)
        {
            _predictionDataService = predictionDataService;
            _matchService = matchService;
            _logger = logger;
            _leagueService = leagueService;
        }

        [HttpGet("{league_id}")]
        public async Task<IActionResult> GetAllMatchesFromLeagueForPredictionsPaginated([FromQuery] PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? league_id)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                model.Items = await _matchService.GetAllPaginatedAsync(model, league_id);

                DateTime today = DateTime.Now;
                DateTime nextWeek = today.AddDays(7);

                model.Items = model.Items.Where(m => DateTime.TryParse(m.Date, out DateTime parsedDate) && parsedDate >= today && parsedDate <= nextWeek && m.OddsAPI!.Home != null).ToList();

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

        //predecir en base a id del match

        //ver predicciones



    }
}