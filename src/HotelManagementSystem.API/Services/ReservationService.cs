using HotelManagementSystem.API.DataManager;
using HotelManagementSystem.API.Models;
using HotelManagementSystem.API.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HotelManagementSystem.API.Services
{
    public class ReservationService : IReservationService
    {
        private readonly DataContext _context;
        public ReservationService(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Reservation>> GetAllReservations()
        {
            var reservations = _context.Reservations;

            return await reservations.ToListAsync();
        }

        public async Task<Reservation> GetReservationById(Guid reservationId)
        {
            var reservation = await _context.Reservations.FindAsync(reservationId);

            ArgumentNullException.ThrowIfNull(reservation, nameof(reservation));

            return reservation;
        }

        public Guid CreateReservation(Reservation reservation)
        {
            ArgumentNullException.ThrowIfNull(reservation, nameof(reservation));

            var payment = reservation.Payments.First();

            payment.ReservationId = reservation.ReservationId;
            payment.GuestId = reservation.GuestId;

            reservation.Payments.Add(payment);

            _context.Reservations.Add(reservation);
            _context.SaveChanges();

            return reservation.ReservationId;
        }

        public void UpdateReservation(Reservation reservation)
        {
            ArgumentNullException.ThrowIfNull(reservation, nameof(reservation));

            _context.Reservations.Update(reservation);
            _context.SaveChanges();
        }

        public void DeleteReservation(Reservation reservation)
        {
            ArgumentNullException.ThrowIfNull(reservation, nameof(reservation));

            _context.Reservations.Remove(reservation);
            _context.SaveChanges();
        }
    }
}
