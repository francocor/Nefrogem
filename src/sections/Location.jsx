import React from 'react';
import '../css/section.css';

function Location() {
  return (
    <section className="location" id="location">
      <h2>Ubicación</h2>
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
    </section>
  );
}

export default Location;