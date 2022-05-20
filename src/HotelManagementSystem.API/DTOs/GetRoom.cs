namespace HotelManagementSystem.API.DTOs
{
    public class GetRoom
    {
        public Guid RoomId { get; set; }
        public int RoomNumber { get; set; }
        public decimal PricePerNight { get; set; }
        public int MaxPersons { get; set; }
    }
}
