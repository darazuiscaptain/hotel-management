using HotelManagementSystem.API.Models;

namespace HotelManagementSystem.API.Services.Interfaces
{
    public interface IGuestService
    {
        Guid CreateGuest(Guest guest);
        void DeleteGuest(Guest guest);
        Task<IEnumerable<Guest>> GetAllGuest();
        Task<Guest> GetGuestById(Guid guestId);
        void UpdateGuest(Guest guest);
    }
}