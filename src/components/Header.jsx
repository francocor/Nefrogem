import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Header.css';
import Logo2 from "../assets/NefroGenLogoGris.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faCalendar } from '@fortawesome/free-regular-svg-icons';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = () => setExpanded(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollOrNavigate = (target) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(target), 100);
    } else {
      scrollToSection(target);
    }
    handleNavClick();
  };

  const sections = [
    { id: 'acerca', label: 'Acerca' },
    { id: 'staff', label: 'Staff' },
    { id: 'departments', label: 'Departamentos' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'location', label: 'Ubicación' },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className="navbar-solid"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <img src={Logo2} alt="Nefrogen Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {sections.map(({ id, label }) => (
              <Nav.Link key={id} onClick={() => handleScrollOrNavigate(id)}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contacto" onClick={handleNavClick}>
              <FontAwesomeIcon icon={faMessage} style={{ marginRight: '5px' }} />
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/turnos" onClick={handleNavClick}>
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
