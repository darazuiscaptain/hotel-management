using HotelManagementSystem.API.DataManager;
using HotelManagementSystem.API.Models;
using Microsoft.EntityFrameworkCore;
using HotelManagementSystem.API.Services.Interfaces;

namespace HotelManagementSystem.API.Services
{
    public class RoomService : IRoomService
    {
        private readonly DataContext _context;
        public RoomService(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Room>> GetAllRooms()
        {
            var rooms = _context.Rooms
                .OrderBy(o => o.RoomNumber);

            return await rooms.ToListAsync();
        }

        public async Task<Room> GetRoomById(Guid roomId)
        {
            var room = await _context.Rooms.FindAsync(roomId);

            ArgumentNullException.ThrowIfNull(room, nameof(room));

            return room;
        }

        public void CreateRoom(Room room)
        {
            ArgumentNullException.ThrowIfNull(room, nameof(room));

            _context.Rooms.Add(room);
            _context.SaveChanges();
        }

        public void UpdateRoom(Room room)
        {
            ArgumentNullException.ThrowIfNull(room, nameof(room));

            _context.Rooms.Update(room);
            _context.SaveChanges();
        }

        public void DeleteRoom(Room room)
        {
            ArgumentNullException.ThrowIfNull(room, nameof(room));

            _context.Rooms.Remove(room);
            _context.SaveChanges();
        }
    }
}
