import React from 'react';
import '../css/section.css';

function Staff() {
  return (
    <section className="staff" id="staff">
      <h2>Staff Profesional</h2>
      <div className="staff-grid">
        <div className="staff-item">
          <div className="image-placeholder">Foto</div>
          <h3>Dr. Profesional</h3>
          <p>Especialidad</p>
        </div>
        <div className="staff-item">
          <div className="image-placeholder">Foto</div>
          <h3>Dra. Ejemplo</h3>
          <p>Especialidad</p>
        </div>
      </div>
    </section>
  );
}

export default Staff;