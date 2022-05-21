import React, { Component } from 'react';
import { Form } from 'reactstrap';

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
        let formData = new FormData();
        formData.append("FirstName", this.state.firstName);
        formData.append("LastName", this.state.lastName);
        formData.append("Address1", this.state.address1);
        formData.append("Address2", this.state.address2);
        formData.append("Email", this.state.email);
        formData.append("Phone", this.state.phone);
        formData.append("City", this.state.city);
        formData.append("Country", this.state.country);
        formData.append("DriverLicense", this.state.driverLicense);

        fetch("guest", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(data => console.log(data));
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