import React from 'react';
import '../css/section.css';

function Location() {
  return (
    <section className="location" id="location">
      <h2>Ubicación</h2>
      <div className="map-placeholder">
        {/* Aquí puedes insertar el mapa o un placeholder */}
        Mapa de Ubicación
      </div>
    </section>
  );
}

export default Location;