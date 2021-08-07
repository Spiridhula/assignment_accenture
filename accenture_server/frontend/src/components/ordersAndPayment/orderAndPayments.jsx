import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Table } from 'react-bootstrap';
import OrderAndPaymentRow from './orderAndPaymentRow.jsx';
import "../styling.css";

const OrderPayments = () => {
	useEffect(() => {
		fetchData()
	}, [])

	const [data, setData] = useState({})

	async function fetchData() {
    try {
      const orders = await axios.get("http://localhost:3001/orders")
      const payments = await axios.get("http://localhost:3001/payments")
      const prices = await axios.get("http://localhost:3001/prices")
      // sum of the payment of each user so there is a unique list of users
      const groupedPayments = Array.from(
        payments.data.reduce((m, { user, amount }) => m.set(user, (m.get(user) || 0) + amount), new Map),
        ([user, amount]) => ({ user, amount })
        ); 

      //creating a new array where we save the user and the amounts he has to pay based on his orders size
      let ordersArray = [];
      orders.data.map(o => {
        prices.data.map(p => {
          if (o.drink === p.drink_name) {
            ordersArray.push({user: o.user, totalAmount: p.prices[o.size]})
          }
        })
      })


      //sum the total amount that each user has to pay so there is a unique list of users 
      const groupedOrders = Array.from(
        ordersArray.reduce((m, { user, totalAmount }) => m.set(user, (m.get(user) || 0) + totalAmount), new Map),
        ([user, totalAmount]) => ({ user, totalAmount })
        ); 

      // mapping the grouped orders and grouped payments based on the user
      const result = [groupedOrders, groupedPayments].reduce((a, b) => a.map((c, i) => Object.assign({}, c, b[i])));
      setData(result)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className = "position">
    <h1>Order and Payments</h1>

    <Table striped bordered hover size="sm">
    <thead className = "tablehead">
    <tr>
    <th>Client Name</th>
    <th>Total Amount </th>
    <th>Paid Amount </th>
    <th>Remaining </th>
    </tr>
    </thead>
    <tbody>
    {data.length !== undefined && data.map(d => (
      //Passing props to the component which will display information
      <OrderAndPaymentRow name = {d.user} total= {d.totalAmount} amount={d.amount} remaining={d.totalAmount - d.amount}/>
      ))}
    </tbody>
    </Table>
    </div>
    )
}

export default OrderPayments