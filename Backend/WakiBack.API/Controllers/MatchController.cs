using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using WakiBack.BLL;
using WakiBack.Models;

namespace WakiBack.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    public class MatchController : BaseAPI
    {
        private readonly IMatchService _matchService;
        private readonly ILogger<MatchController> _logger;
    

        public MatchController( IMatchService matchService, ILogger<MatchController> logger)
        {            
            _matchService = matchService;
            _logger = logger;        
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMatchesResults([FromQuery] PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? league_id)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                model.Items = await _matchService.GetAllResultsPaginatedAsync(model, league_id);

                //provisional, llevar el filtro de date a la bd cambiar tipo string por DateTime, refactor
                DateTime today = DateTime.UtcNow.Date;                

                var cultureInfo = new System.Globalization.CultureInfo("es-ES"); // o la cultura que corresponda al formato DD/MM/YYYY
                model.Items = model.Items
                    .Where(m => DateTime.TryParseExact(m.Date, "dd/MM/yyyy", cultureInfo, System.Globalization.DateTimeStyles.None, out DateTime parsedDate)
                                && parsedDate <= today                                
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



    }
}