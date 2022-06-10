import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const GuestForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            email: "",
            phone: "",
            city: "",
            country: "",
            driverLicense: ""
        }
    });

    const onSubmit = async (data) => {
        
        let guest = {
            FirstName: data.firstName,
            LastName: data.lastName,
            Address1: data.address1,
            Address2: data.address2,
            Email: data.email,
            Phone: data.phone,
            City: data.city,
            Country: data.country,
            DriverLicense: data.driverLicense
        };

        await axios.post('guest', JSON.stringify(guest), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            First Name:
            <input 
                {...register("firstName")}
                placeholder="First Name" />
        </label>
        <br />
        <label>
            Last Name:
            <input
                {...register("lastName")}
                placeholder="Last Name" />
        </label>
        <br />
        <label>
            Address 1:
            <input
                {...register("address1")}
                placeholder="Address 1" />
        </label>
        <br />
        <label>
            Address 2:
            <input
                {...register("address2")}
                placeholder="Address 2" />
        </label>
        <br />
        <label>
            Eamil:
            <input
                {...register("email")}
                placeholder="Email" />
        </label>
        <br />
        <label>
            Phone:
            <input
                {...register("phone")}
                placeholder="Phone" />
        </label>
        <br />
        <label>
            City:
            <input
                {...register("city")}
                placeholder="City" />
        </label>                     
        <br />
        <label>
            Country:
            <input
                {...register("country")}
                placeholder="Country" />
        </label>       
        <br />
        <input type="submit" />
    </form>
  )
}