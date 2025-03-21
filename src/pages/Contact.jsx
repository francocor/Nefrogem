import React from 'react';
import '../css/contact.css';

function Contact() {
  return (
    <main className="contact">
      <h2>Contacto</h2>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className="map-container">
          <iframe
            title="Ubicación de Nefrogen"
            src="https://www.google.com/maps?q=Santiago+del+estero+1134,San+Miguel+de+Tucuman,Tucuman,Argentina&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Contact;