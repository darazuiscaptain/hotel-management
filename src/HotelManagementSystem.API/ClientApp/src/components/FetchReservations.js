import React, { Component } from 'react';

export class FetchReservations extends Component {
  static displayName = FetchReservations.name;

  constructor(props) {
    super(props);
    this.state = { reservations: [], loading: true };
  }

  componentDidMount() {
    this.populateReservationData();
  }

    static renderReservationsTable(reservations) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Room Number</th>
            <th>Booked Date</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Number of Guests</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation =>
            <tr key={reservation.reservationId}>
              <td>{reservation.guestName}</td>
              <td>{reservation.roomNumber}</td>
              <td>{reservation.reservationDate}</td>
              <td>{reservation.checkInDate}</td>
              <td>{reservation.checkOutDate}</td>
              <td>{reservation.numberOfGuests}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchReservations.renderReservationsTable(this.state.reservations);

    return (
      <div>
        <h1 id="tabelLabel" >Reservations</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

    async populateReservationData() {
    const response = await fetch('reservation');
    const data = await response.json();
    this.setState({ reservations: data, loading: false });
  }
}
