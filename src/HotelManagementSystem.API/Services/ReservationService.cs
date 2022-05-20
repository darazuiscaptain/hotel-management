using HotelManagementSystem.API.DataManager;
using HotelManagementSystem.API.DTOs;
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

        public async Task<IEnumerable<GetReservation>> GetAllReservations()
        {
            var reservations = (from reservation in _context.Reservations
                                join guest in _context.Guests on reservation.GuestId equals guest.GuestId
                                join room in _context.Rooms on reservation.RoomId equals room.RoomId
                                join payment in _context.Payments on reservation.ReservationId equals payment.ReservationId
                                select new GetReservation
                                {
                                    ReservationId = reservation.ReservationId,
                                    GuestName = $"{guest.FirstName} {guest.LastName}",
                                    RoomNumber = room.RoomNumber,
                                    CheckInDate = reservation.CheckInDate,
                                    CheckOutDate = reservation.CheckOutDate,
                                    NumberOfGuests = reservation.NumberOfAdults + reservation.NumberOfChildren,
                                    TotalAmount = payment.Amount
                                }).AsNoTracking();

            return await reservations.ToListAsync();
        }

        public async Task<GetReservation> GetReservationById(Guid reservationId)
        {
            var reservation = (from res in _context.Reservations
                               join guest in _context.Guests on res.GuestId equals guest.GuestId
                               join room in _context.Rooms on res.RoomId equals room.RoomId
                               join payment in _context.Payments on res.ReservationId equals payment.ReservationId
                               where res.ReservationId == reservationId
                               select new GetReservation
                               {
                                   ReservationId = res.ReservationId,
                                   GuestName = $"{guest.FirstName} {guest.LastName}",
                                   RoomNumber = room.RoomNumber,
                                   CheckInDate = res.CheckInDate,
                                   CheckOutDate = res.CheckOutDate,
                                   NumberOfGuests = res.NumberOfAdults + res.NumberOfChildren,
                                   TotalAmount = payment.Amount
                               }).AsNoTracking();

            ArgumentNullException.ThrowIfNull(reservation, nameof(reservation));

            return await reservation.FirstAsync();
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
