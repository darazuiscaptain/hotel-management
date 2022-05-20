using HotelManagementSystem.API.DataManager;
using HotelManagementSystem.API.Models;
using HotelManagementSystem.API.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HotelManagementSystem.API.Services
{
    public class GuestService : IGuestService
    {
        private readonly DataContext _context;
        public GuestService(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Guest>> GetAllGuest()
        {
            var guests = _context.Guests;

            return await guests.ToListAsync();
        }

        public async Task<Guest> GetGuestById(Guid guestId)
        {
            var guest = await _context.Guests.FindAsync(guestId);

            ArgumentNullException.ThrowIfNull(guest, nameof(guest));

            return guest;
        }

        public Guid CreateGuest(Guest guest)
        {
            ArgumentNullException.ThrowIfNull(guest, nameof(guest));

            _context.Guests.Add(guest);
            _context.SaveChanges();

            return guest.GuestId;
        }

        public void UpdateGuest(Guest guest)
        {
            ArgumentNullException.ThrowIfNull(guest, nameof(guest));

            _context.Guests.Update(guest);
            _context.SaveChanges();
        }

        public void DeleteGuest(Guest guest)
        {
            ArgumentNullException.ThrowIfNull(guest, nameof(guest));

            _context.Guests.Remove(guest);
            _context.SaveChanges();
        }
    }
}
