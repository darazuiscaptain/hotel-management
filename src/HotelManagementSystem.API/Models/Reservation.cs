namespace HotelManagementSystem.API.Models
{
    public class Reservation
    {
        public Guid ReservationId { get; set; } = new Guid();
        public Guid GuestId { get; set; }
        public Guid RoomId { get; set; }
        public DateTime ReservationDate { get; } = DateTime.UtcNow;
        public DateTime CheckInDate { get;  set; }
        public DateTime CheckOutDate { get; set; }
        public int NumberOfAdults { get; set; }
        public int NumberOfChildren { get; set; }
        public ICollection<Payment> Payments { get; set; } = new List<Payment>();


        public int GetTotalAmountOfDays()
        {
            var days = (CheckOutDate - CheckInDate).Days;

            return days;
        }

        public DateTime GetCheckinDateTime()
        {
            var checkInTS = new TimeSpan(1, 0, 0);

            return CheckInDate.Date + checkInTS;
        }

        public DateTime GetCheckOutDateTime()
        {
            var checkOutTS = new TimeSpan(11, 0, 0);

            return CheckOutDate.Date + checkOutTS;
        }
    }
}
