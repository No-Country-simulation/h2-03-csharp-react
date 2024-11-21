using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using WakiBack.BLL;
using WakiBack.Models;

namespace WakiBack.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    public class TokenEntityController : BaseAPI
    {
        private readonly ITokenService _tokenService;
        private readonly ILogger<TokenEntityController> _logger;


        public TokenEntityController(ITokenService tokenService, ILogger<TokenEntityController> logger)
        {
            _tokenService = tokenService;
            _logger = logger;
        }

        [HttpPost]        
        public async Task<IActionResult> CreateTokenEntity([FromBody]CreateTokenVM model)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    var createResponse = await _tokenService.CreateToken(model);

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
        public async Task<IActionResult> GetAllTokensPaginated([FromQuery] PaginationVM<TokenEntity, ShowTokenVM> model)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                model.Items = await _tokenService.GetAllResultsPaginatedAsync(model);

                if (model.Items.Count() == 0) return NotFound("No Tokens were found with the provided search parameters. Please review the criteria and try again.");

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