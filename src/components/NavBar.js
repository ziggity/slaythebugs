import React from 'react';
import Logo from "/Users/eva/Desktop/my-game/src/assets/images/logo.jpeg";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
  } from "reactstrap";
const NavBar = () => {
  return (
    <nav className="navbar">
       <NavbarBrand className = 'ms-5' href="/">
        <Container>
       <h1 className="mt-1">Slay the hacker</h1> <img src={Logo} alt="logo" className="float-start logo-img" />
      </Container>
        </NavbarBrand>

      
      <div className="navbar-images">
        {/* <img src="image1.png" alt="Image 1" />
        <img src="image2.png" alt="Image 2" />
        <img src="image3.png" alt="Image 3" />
        <img src="image4.png" alt="Image 4" />
        <img src="image5.png" alt="Image 5" /> */}
      </div>
     
    </nav>
  );
}


export default NavBar;