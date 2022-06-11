using HotelManagementSystem.API.DataManager;
using HotelManagementSystem.API.Models;
using HotelManagementSystem.API.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HotelManagementSystem.API.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly DataContext _context;
        public PaymentService(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Payment>> GetAllPayments()
        {
            var payments = _context.Payments;

            return await payments.ToListAsync();
        }

        public async Task<IEnumerable<Payment>> GetPaymentsByReservationId(Guid reservationId)
        {
            var payments = _context.Payments
                .Where(i => i.ReservationId == reservationId);

            ArgumentNullException.ThrowIfNull(payments);

            return payments.ToList();
        }

        public async Task<Payment> GetPaymentById(Guid paymentId)
        {
            var payment = await _context.Payments.FindAsync(paymentId);

            ArgumentNullException.ThrowIfNull(payment, nameof(payment));

            return payment;
        }

        public void CreatePayment(Payment payment)
        {
            ArgumentNullException.ThrowIfNull(payment, nameof(payment));

            _context.Payments.Add(payment);
            _context.SaveChanges();
        }

        public void UpdatePayment(Payment payment)
        {
            ArgumentNullException.ThrowIfNull(payment, nameof(payment));

            _context.Payments.Update(payment);
            _context.SaveChanges();
        }

        public void DeletePayment(Payment payment)
        {
            ArgumentNullException.ThrowIfNull(payment, nameof(payment));

            _context.Payments.Remove(payment);
            _context.SaveChanges();
        }
    }
}
