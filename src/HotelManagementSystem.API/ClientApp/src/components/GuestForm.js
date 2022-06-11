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
            state: "",
            country: ""
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
            State: data.state,
            Country: data.country
        };

        await axios.post('guest', JSON.stringify(guest), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
  
    return (
     <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" {...register("firstName")} placeholder="First Name" />
            </div>
            <div class="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" {...register("lastName")} placeholder="Last Name" />
            </div>
        </div>
        <div class="form-group">
            <label for="address1">Address 1</label>
            <input type="text" class="form-control" {...register("address1")} placeholder="Address 1" />
        </div>
        <div class="form-group">
            <label for="address2">Address 2</label>
            <input type="text" class="form-control" {...register("address2")} placeholder="Address 2" />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" {...register("email")} placeholder="Email" />
        </div>
        <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" {...register("phone")} placeholder="Phone" />
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="city">City</label>
                <input type="text" class="form-control" {...register("city")} placeholder="City" />
            </div>
            <div class="form-group col-md-4">
                <label for="state">State</label>
                <input type="text" class="form-control" {...register("state")} placeholder="State" />
            </div>
            <div class="form-group col-md-2">
                <label for="country">Country</label>
                <input type="text" class="form-control" {...register("country")} placeholder="Country" />
            </div>
        </div>
            <input type="submit" />
     </form>
  )
}