using HotelManagementSystem.API.Models;

namespace HotelManagementSystem.API.Services.Interfaces
{
    public interface IReservationService
    {
        Guid CreateReservation(Reservation reservation);
        void DeleteReservation(Reservation reservation);
        Task<IEnumerable<Reservation>> GetAllReservations();
        Task<Reservation> GetReservationById(Guid reservationId);
        void UpdateReservation(Reservation reservation);
    }
}