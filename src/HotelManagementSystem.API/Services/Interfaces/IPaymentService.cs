using HotelManagementSystem.API.Models;

namespace HotelManagementSystem.API.Services.Interfaces
{
    public interface IPaymentService
    {
        void CreatePayment(Payment payment);
        void DeletePayment(Payment payment);
        Task<IEnumerable<Payment>> GetAllPayments();
        Task<Payment> GetPaymentById(Guid paymentId);
        void UpdatePayment(Payment payment);
    }
}