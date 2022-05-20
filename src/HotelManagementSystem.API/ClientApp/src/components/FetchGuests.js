import React, { Component } from 'react';

export class FetchGuests extends Component {
  static displayName = FetchGuests.name;

  constructor(props) {
    super(props);
    this.state = { guests: [], loading: true };
  }

  componentDidMount() {
    this.populateGuestData();
  }

    static renderGuestsTable(guests) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Country</th>
            <th>DriverLicense</th>
          </tr>
        </thead>
        <tbody>
          {guests.map(guest =>
            <tr key={guest.guestId}>
              <td>{guest.firstName}</td>
              <td>{guest.lastName}</td>
              <td>{guest.address1}</td>
              <td>{guest.address2}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
              <td>{guest.city}</td>
              <td>{guest.country}</td>
              <td>{guest.driverLicense}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchGuests.renderGuestsTable(this.state.guests);

    return (
      <div>
        <h1 id="tabelLabel" >Guests</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateGuestData() {
    const response = await fetch('guest');
    const data = await response.json();
      this.setState({ guests: data, loading: false });
  }
}
