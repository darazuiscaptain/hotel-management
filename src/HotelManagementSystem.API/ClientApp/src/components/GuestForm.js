import React, { Component } from 'react';

export class GuestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            email: "",
            phone: "",
            city: "",
            country: "",
            driverLicense: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        //alert('A name was submitted: ' + this.state.roomId);
        e.preventDefault();
        
        let guest = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Address1: this.state.address1,
            Address2: this.state.address2,
            Email: this.state.email,
            Phone: this.state.phone,
            City: this.state.city,
            Country: this.state.country,
            DriverLicense: this.state.driverLicense
        };

        fetch('guest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(guest),
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log("Error detected: " + error))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input 
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Address 1:
                    <input
                        name="address1"
                        type="text"
                        value={this.state.address1}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Address 2:
                    <input 
                        name="address2"
                        type="text"
                        value={this.state.address2}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        name="phone"
                        type="text"
                        value={this.state.phone}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    City:
                    <input 
                        name="city"
                        type="text"
                        value={this.state.city}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Country:
                    <input 
                        name="country"
                        type="text"
                        value={this.state.country}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Driver License:
                    <input
                        name="driverLicense"
                        type="text"
                        value={this.state.driverLicense}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}