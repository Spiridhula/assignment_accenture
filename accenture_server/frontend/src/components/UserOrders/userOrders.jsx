import React, {useEffect, useState} from 'react';

import axios from "axios";
import UserOrdersRow from './userOrdersRow.jsx';
import {Table} from 'react-bootstrap';
import "../styling.css";


const UserOrders =() => {



	useEffect( () => {

		console.log("spiri");
		fetchData()
  }, [])

  const [data, setData] = useState({})
  async function fetchData(){
    try {
      const result = await axios.get("http://localhost:3001/orders")

      setData(result)

      console.log(result)
    }
    catch(error){
    	console.log(error)
    }
  }




  return ( 
   <div className= "position">
   <h1> User orders </h1>
   <div class="table-wrapper-scroll-y my-custom-scrollbar">
   <Table striped bordered hover size="sm">
   <thead className = "tablehead">
   <tr>
   <th>Client Name</th>
   <th>Type of drink</th>
   <th>Size of drink</th>
   </tr>
   </thead>
   <tbody>
   {data.data !== undefined && data.data.map(d=> (
   // Passing props to the component which will display information
    <UserOrdersRow name={d.user}  drink ={d.drink} size= { d.size}/>))}
   </tbody>
   </Table>
   </div>
   </div>


   )
}






export default UserOrders;