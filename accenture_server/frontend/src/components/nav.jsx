import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './nav.css'

const NavMenu = () =>{
	return (
		<div>
		<Navbar  bg="dark" variant="white">
  <Container>
{/*    <Nav className="me-auto">*/}
		<Link className='navLink' to="/">Products</Link>
		<Link className='navLink' to="/user">Client Orders</Link>
		<Link className='navLink' to="/order">Orders & Payments </Link>
		{/*</Nav>*/}
  </Container>
</Navbar>
		</div>
		)
}

export default NavMenu;