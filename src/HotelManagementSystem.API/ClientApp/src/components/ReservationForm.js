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
        e.preventDefault();
        
        let reserve = {
            GuestId: this.state.guestId,
            RoomId: this.state.roomId,
            CheckInDate: this.state.checkInDate,
            CheckOutDate: this.state.checkOutDate,
            NumberOfAdults: this.state.numberOfAdults,
            NumberOfChildren: this.state.numberOfChildren
        };

        fetch('reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reserve),
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log("Error detected: " + error))
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
                        type="number"
                        checked={this.state.numberOfAdults}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Number Of Children:
                    <input
                        name="numberOfChildren"
                        type="number"
                        checked={this.state.numberOfChildren}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}