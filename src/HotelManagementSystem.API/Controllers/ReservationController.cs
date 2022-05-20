using HotelManagementSystem.API.Models;
using HotelManagementSystem.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystem.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService _reservation;
        private readonly ILogger<ReservationController> _logger;

        public ReservationController(IReservationService reservation, ILogger<ReservationController> logger)
        {
            _reservation = reservation;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reservation>>> Get()
        {
            try
            {
                var reservations = await _reservation.GetAllReservations();

                return Ok(reservations);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult<Guid> Post(Reservation reservation)
        {
            try
            {
                var id = _reservation.CreateReservation(reservation);

                return Ok(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.Message);
            }
        }
    }
}
