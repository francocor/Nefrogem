import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import Logo2 from "../assets/NefroGenLogoGris.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faCalendar } from '@fortawesome/free-regular-svg-icons';

function Header() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
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
            <Nav.Link as={Link} to="/contacto">
              <FontAwesomeIcon icon={faMessage} style={{ marginRight: '5px' }} />
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/turnos">
              <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '5px' }} />
              Turnos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;