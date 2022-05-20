using HotelManagementSystem.API.Models;

namespace HotelManagementSystem.API.Services.Interfaces
{
    public interface IRoomService
    {
        void CreateRoom(Room room);
        void DeleteRoom(Room room);
        Task<IEnumerable<Room>> GetAllRooms();
        Task<Room> GetRoomById(Guid roomId);
        void UpdateRoom(Room room);
    }
}