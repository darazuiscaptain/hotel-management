using HotelManagementSystem.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelManagementSystem.API.DataManager
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Guest> Guests { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<RoomStatus> RoomsStatus { get; set; }
        public DbSet<RoomType> RoomTypes { get; set; }
    }
}
