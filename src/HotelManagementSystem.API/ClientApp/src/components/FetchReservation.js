import React, { useRef } from 'react'
import { useFetch } from './useFetch'

 export const FetchReservation = () => {
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "reservation/451FBE59-8EDF-465F-6C97-08DA2FBE6A98",
    isComponentMounted,
    [],
    "GET"
  );
  
  if (loading) return <h1>Loading...</h1>;

  if (error) console.log(error);

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
            <tr key={data?.reservationId}>
              <td>{data?.guestName}</td>
              <td>{data?.roomNumber}</td>
              <td>{data?.checkInDate}</td>
              <td>{data?.checkOutDate}</td>
              <td>{data?.numberOfNights}</td>
              <td>{data?.totalAmount}</td>
              <td>{data?.numberOfGuests}</td>
            </tr>
        </tbody>
      </table>
  )
}