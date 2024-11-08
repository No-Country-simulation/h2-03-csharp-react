using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WakiBack.BLL;
using WakiBack.Models;

namespace WakiBack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DivisionController : BaseAPI
    {
        public readonly IDivisionService _divisionService;
        public DivisionController(IDivisionService divisionService)
        {
            _divisionService = divisionService;
        }
        // Obtener perfil de división de un usuario
        [HttpGet("GetAllCustomers")]
        public async Task<ActionResult<ShowDataDivisionVM>> GetCustomers()
        {
            try
            {
                var data = await _divisionService.GetAllCustomersAsync();

                if (data == null)
                {
                    return NotFound("Profile not found");
                }

                return Ok(data);
            }
            catch (Exception ex)
            {
                return Problem(detail: "Server error: " + ex.Message);
            }
        }

        [HttpGet("getUsersByDivision")]
        public async Task<IActionResult> GetUsersByDivision(string email)
        {
            try
            {
                var usersInSameDivision = await _divisionService.GetDivisionsByProfile(email);
                return Ok(usersInSameDivision);
            }
            catch (Exception ex)
            {
                return Problem(detail: "Server error: " + ex.Message);
            }
        }

        // Asignar divisiones a los clientes basados en los puntos
        [HttpPost("AssignDivisions")]
        public async Task<IActionResult> AssignDivisions()
        {
            try
            {
                var customerData = await _divisionService.GetDivisionsAndAssignAsync();

                if (customerData == null || !customerData.Any())
                {
                    return NotFound("No customers found to assign divisions");
                }

                return Ok(customerData);
            }
            catch (Exception ex)
            {
                return Problem(detail: "Server error: " + ex.Message);
            }
        }
    }
}

