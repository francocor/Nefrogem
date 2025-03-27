import React from 'react';
import '../css/contact.css';

function Contact() {
  return (
    <main className="contact">
      <div className="contact-container">
        <div className="row">
          <h2>Contacto</h2>
        </div>
        <div className="row container-contact justify-content-center">
          <div className="col-12 col-md-6 form-col">
            <form className="contact-form">
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Mensaje"></textarea>
              <button style={{background:"#40717E", borderRadius:"32px"}} type="submit">Enviar</button>
            </form>
          </div>
          <div className="col-12 col-md-6 map-col">
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
        </div>
      </div>
    </main>
  );
}

export default Contact;