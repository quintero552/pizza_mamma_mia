import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "../Context/MyContext";
const Menu = () => {
  // const { carrito} = useContext(MyContext);
  // const [show, setShow] = useState({});
  // console.log('===> menu',show)


  // const valor = (contador) => {
  //   const valorAr = show.find((item) => item.contador === contador)    
  //   setShow(valorAr)
  // }

  // useEffect(() => {
  //   valor()
  // },[])

  
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
            {/* <p className={Banner} style={{marginBottom: 0}}>${valor.price}</p> */}
            {/* <NavLink to="/detallepedido" className={Banner}>${valor.contador}</NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
