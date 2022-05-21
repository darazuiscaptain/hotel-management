import React, { Component } from 'react';

export class ReservationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
             guestId: "",
             roomId: "",
             checkInDate: "",
             checkOutDate: "",
             numberOfAdults: "",
             numberOfChildren: "" 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        //alert('A name was submitted: ' + this.state.roomId);
        e.preventDefault();
        let formData = new FormData();
        formData.append("GuestId", this.state.guestId);
        formData.append("RoomId", this.state.roomId);
        formData.append("CheckInDate", this.state.checkInDate);
        formData.append("CheckOutDate", this.state.checkOutDate);
        formData.append("NumberOfAdults", this.state.numberOfAdults);
        formData.append("NumberOfChildren", this.state.numberOfChildren);

        fetch("reservation", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Guest ID:
                    <input 
                        name="guestId"
                        type="text" 
                        checked={this.state.guestId} 
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Room ID:
                    <input
                        name="roomId"
                        type="text"
                        checked={this.state.roomId}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Check In Date:
                    <input
                        name="checkInDate"
                        type="text"
                        checked={this.state.checkInDate}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Check Out Date:
                    <input
                        name="checkOutDate"
                        type="text"
                        checked={this.state.checkOutDate}
                        onChange={this.handleChange} />
                </label>    
                <br />
                <label>
                    Number Of Adults:
                    <input
                        name="numberOfAdults"
                        type="text"
                        checked={this.state.numberOfAdults}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Number Of Children:
                    <input
                        name="numberOfChildren"
                        type="text"
                        checked={this.state.numberOfChildren}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}