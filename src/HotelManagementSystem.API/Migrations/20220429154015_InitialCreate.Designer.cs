﻿// <auto-generated />
using System;
using HotelManagementSystem.API.DataManager;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace HotelManagementSystem.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220429154015_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("HotelManagementSystem.API.Models.Guest", b =>
                {
                    b.Property<Guid>("GuestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address1")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("Address2")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("DriverLicense")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.HasKey("GuestId");

                    b.ToTable("Guests");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.Payment", b =>
                {
                    b.Property<Guid>("PaymentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal>("Amount")
                        .HasPrecision(19, 4)
                        .HasColumnType("decimal(19,4)");

                    b.Property<Guid>("GuestId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("Paid")
                        .HasColumnType("bit");

                    b.Property<DateTime>("PayTime")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("ReservationId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("PaymentId");

                    b.HasIndex("GuestId");

                    b.HasIndex("ReservationId");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.Reservation", b =>
                {
                    b.Property<Guid>("ReservationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CheckInDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("CheckOutDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("GuestId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("NumberOfAdults")
                        .HasColumnType("int");

                    b.Property<int>("NumberOfChildren")
                        .HasColumnType("int");

                    b.Property<DateTime>("ReservationDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("RoomId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ReservationId");

                    b.HasIndex("GuestId");

                    b.HasIndex("RoomId");

                    b.ToTable("Reservations");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.Room", b =>
                {
                    b.Property<Guid>("RoomId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("MaxPersons")
                        .HasColumnType("int");

                    b.Property<decimal>("PricePerNight")
                        .HasPrecision(19, 4)
                        .HasColumnType("decimal(19,4)");

                    b.Property<int>("RoomNumber")
                        .HasColumnType("int");

                    b.Property<Guid>("RoomStatusId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("RoomTypeId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("RoomId");

                    b.HasIndex("RoomStatusId");

                    b.HasIndex("RoomTypeId");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.RoomStatus", b =>
                {
                    b.Property<Guid>("RoomStatusId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("RoomStatusName")
                        .HasColumnType("int");

                    b.HasKey("RoomStatusId");

                    b.ToTable("RoomsStatus");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.RoomType", b =>
                {
                    b.Property<Guid>("RoomTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("RoomTypeName")
                        .HasColumnType("int");

                    b.HasKey("RoomTypeId");

                    b.ToTable("RoomTypes");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.Payment", b =>
                {
                    b.HasOne("HotelManagementSystem.API.Models.Guest", null)
                        .WithMany("Payments")
                        .HasForeignKey("GuestId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HotelManagementSystem.API.Models.Reservation", null)
                        .WithMany("Payments")
                        .HasForeignKey("ReservationId");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.Reservation", b =>
                {
                    b.HasOne("HotelManagementSystem.API.Models.Guest", null)
                        .WithMany("Reservations")
                        .HasForeignKey("GuestId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HotelManagementSystem.API.Models.Room", null)
                        .WithMany("Reservations")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.Room", b =>
                {
                    b.HasOne("HotelManagementSystem.API.Models.RoomStatus", null)
                        .WithMany("Rooms")
                        .HasForeignKey("RoomStatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HotelManagementSystem.API.Models.RoomType", null)
                        .WithMany("Rooms")
                        .HasForeignKey("RoomTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.Guest", b =>
                {
                    b.Navigation("Payments");

                    b.Navigation("Reservations");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.Reservation", b =>
                {
                    b.Navigation("Payments");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.Room", b =>
                {
                    b.Navigation("Reservations");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.RoomStatus", b =>
                {
                    b.Navigation("Rooms");
                });

            modelBuilder.Entity("HotelManagementSystem.API.Models.RoomType", b =>
                {
                    b.Navigation("Rooms");
                });
#pragma warning restore 612, 618
        }
    }
}
