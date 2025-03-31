import React from 'react';
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
          Santiago del Estero 1134, San Miguel de Tucuman
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
          nefrogen@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
          +54 3815996586
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ marginRight: '8px' }} />
          Lunes a Viernes de 8 a 20
        </p>
      </div>
        <p>síguenos en nuestras redes</p>
      <div className="footer-social">
        
        <a
          href="https://www.instagram.com/nefrogen.ar?igsh=MWtkbTdvbWV3NW9odw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/company/nefrogen/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.youtube.com/@nefrogen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;