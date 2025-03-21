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
          {/* mapa */}
          Mapa de Ubicación
        </div>
      </div>
    </main>
  );
}

export default Contact;