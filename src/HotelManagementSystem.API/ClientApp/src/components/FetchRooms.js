import React, { Component } from 'react';

export class FetchRooms extends Component {
  static displayName = FetchRooms.name;

  constructor(props) {
    super(props);
    this.state = { rooms: [], loading: true };
  }

  componentDidMount() {
    this.populateRoomData();
  }

    static renderRoomsTable(rooms) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Price</th>
            <th>Max Persons</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room =>
            <tr key={room.roomId}>
              <td>{room.roomNumber}</td>
              <td>{room.pricePerNight}</td>
              <td>{room.maxPersons}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchRooms.renderRoomsTable(this.state.rooms);

    return (
      <div>
        <h1 id="tabelLabel" >Rooms</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateRoomData() {
    const response = await fetch('room');
    const data = await response.json();
      this.setState({ rooms: data, loading: false });
  }
}
