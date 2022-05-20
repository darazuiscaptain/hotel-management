namespace HotelManagementSystem.API.Models
{
    public class Reservation
    {
        public Guid ReservationId { get; set; } = new Guid();
        public Guid GuestId { get; set; }
        public Guid RoomId { get; set; }
        public DateTime ReservationDate { get; set; } = DateTime.Now;
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public int NumberOfAdults { get; set; }
        public int NumberOfChildren { get; set; }
        public ICollection<Payment> Payments { get; set; } = null!;
    }
}
