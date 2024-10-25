using Hangfire;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WakiBack.BLL;



namespace WakiBack.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Dev,Admin")]
    public class PredictionDataAdminController : ControllerBase
    {
        private readonly IPredictionDataService _predictionDataService;
        private readonly IBackgroundJobClient _backgroundJobClient;

        public PredictionDataAdminController(IPredictionDataService predictionDataService, IBackgroundJobClient backgroundJobClient)
        {
            _predictionDataService = predictionDataService;
            _backgroundJobClient = backgroundJobClient;
        }

        [HttpPost]
        public IActionResult SeedDatabase()
        {
            try
            {
                _backgroundJobClient.Enqueue(() => _predictionDataService.SeedDatabase());

                string result = "SeedDatabase is currently in progress";
                return Ok(result);
            }
            catch (Exception ex)
            {
                var log = $"{ex.Message} {ex.InnerException?.Message}";               
                return Problem(log);
            }
        }

        [HttpPost]
        public IActionResult ForceUpdateDatabase()
        {
            try
            {
                _backgroundJobClient.Enqueue(() => _predictionDataService.UpdateDatabase());
                string result = "UpdateDatabase is currently in progress";
                return Ok(result);
            }
            catch (Exception ex)
            {
                var log = $"{ex.Message} {ex.InnerException?.Message}";
                
                return Problem(log);
            }

        }
    }
}
