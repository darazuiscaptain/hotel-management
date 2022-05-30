import React, { useState } from 'react';

export const ReservationForm = () => {
    const handleSubmit= (e) => {
        e.preventDefault();
    }

    const [guestId, setGuestId] = useState();
    const [roomId, setRoomId] = useState();
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const [numberOfAdults, setNumberOfAdults] = useState();
    const [numberOfChildren, setNumberOfChildren] = useState();

  return (
    <form onSubmit={e => { handleSubmit(e) }}>
                <label>
                    Guest ID:
                    <input 
                        name="guestId"
                        type="text" 
                        value={guestId}
                        //checked={this.state.guestId} 
                        onChange={e => setGuestId(e.target.value)} />
                </label>
                <br />
                <label>
                    Room ID:
                    <input
                        name="roomId"
                        type="text"
                        value={roomId}
                        //checked={this.state.roomId}
                        onChange={e => setRoomId(e.target.value)} />
                </label>
                <br />
                <label>
                    Check In Date:
                    <input
                        name="checkInDate"
                        type="text"
                        value={checkInDate}
                        //checked={this.state.checkInDate}
                        onChange={e => setCheckInDate(e.target.value)} />
                </label>
                <br />
                <label>
                    Check Out Date:
                    <input
                        name="checkOutDate"
                        type="text"
                        value={checkOutDate}
                        //checked={this.state.checkOutDate}
                        onChange={e => setCheckOutDate(e.target.value)} />
                </label>    
                <br />
                <label>
                    Number Of Adults:
                    <input
                        name="numberOfAdults"
                        type="number"
                        value={numberOfAdults}
                        //checked={this.state.numberOfAdults}
                        onChange={e => setNumberOfAdults(e.target.value)} />
                </label>
                <br />
                <label>
                    Number Of Children:
                    <input
                        name="numberOfChildren"
                        type="number"
                        value={numberOfChildren}
                        //checked={this.state.numberOfChildren}
                        onChange={e => setNumberOfChildren(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
  )
}