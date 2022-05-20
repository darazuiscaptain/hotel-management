using Microsoft.EntityFrameworkCore;

namespace HotelManagementSystem.API.Models
{
    public class Room
    {
        public Guid RoomId { get; set; }
        public Guid RoomTypeId { get; set; }
        public Guid RoomStatusId { get; set; }
        public int RoomNumber { get; set; }
        [Precision(19, 4)]
        public decimal PricePerNight { get; set; }
        public int MaxPersons { get; set; }

        public ICollection<Reservation> Reservations { get; set; } = null!;
    }
}
