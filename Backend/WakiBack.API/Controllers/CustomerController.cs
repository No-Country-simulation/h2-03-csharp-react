using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WakiBack.BLL;
using WakiBack.Models;

namespace WakiBack.API.Controllers.Base
{

    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Customer")]
    public class CustomerController : BaseAPI
    {
        private readonly ICustomerService _customerService;


        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;

        }

        [HttpGet]
        public async Task<ActionResult<ShowCustomerDataVM>> GetMyProfile()
        {
            try
            {
                var data = await _customerService.GetMyProfileAsync(RequestEmail(User));

                return Ok(data);
            }
            catch (Exception ex)
            {
                return Problem(detail: "Server error: " + ex.Message);
            }
        }

        //Update customer profile


    }
}
