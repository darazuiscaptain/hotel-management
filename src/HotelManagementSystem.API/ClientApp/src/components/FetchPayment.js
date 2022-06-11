import React, { useRef } from 'react'
import { useFetch } from './useFetch'

export const FetchPayment = (props) => {
    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
      "payment/451FBE59-8EDF-465F-6C97-08DA2FBE6A98",
      isComponentMounted,
      []
    );

    if (loading) return <h1>Loading...</h1>;

    if (error) console.log(error);
  
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Guest ID</th>
            <th>Reservation ID</th>
            <th>Amount</th>
            <th>Paid</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(payment =>
            <tr key={payment.paymentId}>
              <td>{payment.guestId}</td>
              <td>{payment.reservationId}</td>
              <td>{payment.amount}</td>
              <td>{payment.paid}</td>
              <td>{payment.paymentDate}</td>
            </tr>
          )}
        </tbody>
      </table>
  )
}