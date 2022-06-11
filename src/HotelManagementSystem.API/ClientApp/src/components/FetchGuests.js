import React, { useRef } from 'react'
import { useFetch } from './useFetch'

export const FetchGuests = () => {
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "guest",
    isComponentMounted,
    []
  );

  if (loading) return <h1>Loading...</h1>;

  if (error) console.log(error);
  
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
          {data?.map(guest =>
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
  )
}