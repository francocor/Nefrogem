import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  const [navbarSolid, setNavbarSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavbarSolid(true);
      } else {
        setNavbarSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={navbarSolid ? 'navbar-solid' : 'navbar-transparent'}>
      <Container>
        <Navbar.Brand as={Link} to="/">Nefrogen</Navbar.Brand>
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