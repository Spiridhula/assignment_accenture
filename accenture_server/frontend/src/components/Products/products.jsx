import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Table } from 'react-bootstrap';
import ProductRow from './productRow.jsx';

const Products = () => {
	useEffect(() => {
		fetchData()
	}, [])

	const [data, setData] = useState({})

	async function fetchData() {
    try {
      const result = await axios.get("http://localhost:3001/prices")
      setData(result)
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className = "position">
    <h1>Products</h1>
    <Table striped bordered hover size="sm">
    <thead className = "tablehead">
    <tr>
    <th>Drink name</th>
    <th>Small size  price</th>
    <th>Medium size price</th>
    <th>Large size price</th>
    <th>Huge size price</th>
    <th>Mega size price</th>
    <th>Ultra size price</th>
    </tr>
    </thead>
    <tbody>
    {data.data && data.data.map(d => (
      //Passing props to the component which will display information
      <ProductRow name={d.drink_name} small={d.prices.small} medium={d.prices.medium} large={d.prices.large} huge={d.prices.huge} mega={d.prices.mega} ultra={d.prices.ultra}/>

      ))}
    </tbody>
    </Table>
    </div>
    )
}

export default Products;



