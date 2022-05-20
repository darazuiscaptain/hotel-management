using System.ComponentModel.DataAnnotations.Schema;

namespace HotelManagementSystem.API.Models
{
    public class RoomType
    {
        //public enum TypeOfRoom { Single, Double, Triple, Quad, Queen, King, Twin };
        public Guid RoomTypeId { get; set; }
        [Column(TypeName = "varchar(250)")]
        public string RoomTypeName { get; set; } = string.Empty;
        public ICollection<Room> Rooms { get; set; } = null!;
    }
}
