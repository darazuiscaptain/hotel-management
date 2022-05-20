using System.ComponentModel.DataAnnotations.Schema;

namespace HotelManagementSystem.API.Models
{
    public class RoomStatus
    {
        //public enum StatusOfRoom { Vacant, Occupied };
        public Guid RoomStatusId { get; set; }
        [Column(TypeName = "varchar(250)")]
        public string RoomStatusName { get; set; } = string.Empty;
        public ICollection<Room> Rooms { get; set; } = null!;
    }
}
