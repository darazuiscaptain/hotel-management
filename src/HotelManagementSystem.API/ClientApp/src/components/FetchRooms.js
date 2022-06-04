import React, { useRef } from 'react'
import { useFetch } from './useFetch'

export const FetchRooms = () =>  {
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "room",
    isComponentMounted,
    []
  );

  if (loading) return <h1>Loading...</h1>;

  if (error) console.log(error);

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
      {data?.map(room =>
        <tr key={room.roomId}>
          <td>{room.roomNumber}</td>
          <td>{room.pricePerNight}</td>
          <td>{room.maxPersons}</td>
        </tr>
      )}
    </tbody>
  </table>
  )
}
