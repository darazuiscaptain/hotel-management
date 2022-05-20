using Microsoft.EntityFrameworkCore;

namespace HotelManagementSystem.API.Models
{
    public class Payment
    {
        public Guid PaymentId { get; set; } = new Guid();
        public Guid? GuestId { get; set; }
        public Guid? ReservationId { get; set; }
        [Precision(19,4)]
        public decimal Amount { get; set; }
        public bool Paid { get; set; }
        public DateTime PayTime { get; set; }
    }
}
