import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const ReservationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            guestId: "",
            roomId: "",
            checkInDate: "",
            checkOutDate: "",
            numberOfAdults: "",
            numberOfChildren: ""
        }
    });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (reservation) => {
        setIsLoading(true);

        let reserve = {
            GuestId: reservation.guestId,
            RoomId: reservation.roomId,
            CheckInDate: reservation.chekInDate,
            CheckOutDate: reservation.checkOutDate,
            NumberOfAdults: reservation.numberOfAdults,
            NumberOfChildren: reservation.numberOfChildren
        };

        await axios.post('reservation', JSON.stringify(reserve), {
            headers: { 'Content-Type': 'application/json' }
        });

        setIsLoading(false);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
            <label>
                Guest ID:
                <input 
                    {...register("guestId")}
                    placeholder="Guest Id" />
            </label>
        </div>
        <br />
        <label>
            Room Id:
            <input
                {...register("roomId")}
                placeholder="Room Id" />
        </label>
        <br />
        <label>
            Check In Date:
            <input
                {...register("checkInDate")}
                placeholder="Check In Date" />
        </label>
        <br />
        <label>
            Check Out Date:
            <input
                {...register("checkOutDate")}
                placeholder="Check Out Date" />
        </label>
        <br />
        <label>
            Number Of Adults:
            <input
                {...register("numberOfAdults")}
                placeholder="Number Of Adults" />
        </label>
        <br />
        <label>
            Number of Children:
            <input
                {...register("numberOfChildren")}
                placeholder="Number Of Children" />
        </label>
        <br />                            
        <input type="submit" disabled={isLoading} />
    </form>
  )
}