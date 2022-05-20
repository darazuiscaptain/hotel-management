﻿using System.ComponentModel.DataAnnotations.Schema;

namespace HotelManagementSystem.API.Models
{
    public class Guest
    {
        public Guid GuestId { get; set; }
        [Column(TypeName = "varchar(250)")]
        public string FirstName { get; set; } = string.Empty;
        [Column(TypeName = "varchar(250)")]
        public string LastName { get; set; } = string.Empty;
        [Column(TypeName = "varchar(250)")]
        public string Address1 { get; set; } = string.Empty;
        [Column(TypeName = "varchar(250)")]
        public string Address2 { get; set; } = null!;
        [Column(TypeName = "varchar(250)")]
        public string Email { get; set; } = string.Empty;
        [Column(TypeName = "varchar(100)")]
        public string Phone { get; set; } = string.Empty;
        [Column(TypeName = "varchar(250)")]
        public string City { get; set; } = string.Empty;
        [Column(TypeName = "varchar(250)")]
        public string Country { get; set; } = string.Empty;
        [Column(TypeName = "varchar(100)")]
        public string DriverLicense { get; set; } = string.Empty;

        public ICollection<Reservation> Reservations { get; set; } = null!;
        public ICollection<Payment> Payments { get; set; } = null!;
    }
}