using HotelManagementSystem.API.Models;
using HotelManagementSystem.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystem.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GuestController : ControllerBase
    {
        private readonly IGuestService _guest;
        private readonly ILogger<GuestController> _logger;

        public GuestController(IGuestService guest, ILogger<GuestController> logger)
        {
            _guest = guest;
            _logger = logger;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Guest>>> Get()
        {
            try
            {
                var guests = await _guest.GetAllGuest();

                return Ok(guests);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.Message);
            }

        }
    }
}
