import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
const Menu = () => {
  const {pizzas, addproducto} = useContext(MyContext);

  
  //console.log('MENU>>',pizzas)
    const Banner = (isActive) => isActive ? 'MenuActivo' : 'Menu';
  return (
    <Navbar expand="lg" className="bg-info">
      <Container style={{marginTop: "0"}}>
        <NavLink to="/" className={Banner} style={{fontWeight: 500, fontSize: 'large'}}>🍕 Pizzería Mamma Mia!</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={Banner}>🛒</NavLink>
            <NavLink to="/detallepedido" className={Banner}></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
