namespace HotelManagementSystem.API.DTOs
{
    public class GetReservation
    {
        public Guid ReservationId { get; set; }
        public string GuestName { get; set; }
        public int RoomNumber { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public decimal TotalAmount { get; set; }
        public int NumberOfGuests { get; set; }
    }
}
