import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import Logo1 from "../assets/NefroGenLogoBlanco.png";
import Logo2 from "../assets/NefroGenLogoGris.png";

function Header() {

 

  return (
    <Navbar
      expand="lg"
      fixed="top"
      /* Quitar variant y bg si estaban */
      className={'navbar-solid'}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src={Logo2} 
            alt="Nefrogen Logo" 
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#acerca">Acerca</Nav.Link>
            <Nav.Link href="/#staff">Staff</Nav.Link>
            <Nav.Link href="/#departments">Departamentos</Nav.Link>
            <Nav.Link href="/#testimonials">Testimonios</Nav.Link>
            <Nav.Link href="/#location">Ubicación</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/turnos">Turnos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;