import React, { Component } from 'react';

export class FetchReservation extends Component {
  static displayName = FetchReservation.name;

  constructor(props) {
    super(props);
    this.state = { reservation: {}, loading: true };
  }

  componentDidMount() {
    this.populateReservationData();
  }

    static renderReservationTable(reservation) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Room Number</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Number Of Nights</th>
            <th>Total Amount</th>
            <th>Number of Guests</th>
          </tr>
        </thead>
        <tbody>
        <tr key={reservation.reservationId}>
              <td>{reservation.guestName}</td>
              <td>{reservation.roomNumber}</td>
              <td>{reservation.checkInDate}</td>
              <td>{reservation.checkOutDate}</td>
              <td>{reservation.numberOfNights}</td>
              <td>{reservation.totalAmount}</td>
              <td>{reservation.numberOfGuests}</td>
            </tr>
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchReservation.renderReservationTable(this.state.reservation);

    return (
      <div>
        <h1 id="tabelLabel" >Reservation</h1>
        {contents}
      </div>
    );
  }

    async populateReservationData() {
    const response = await fetch('reservation/451FBE59-8EDF-465F-6C97-08DA2FBE6A98');
    const data = await response.json();
    this.setState({ reservation: data, loading: false });
  }
}
