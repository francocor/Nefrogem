import React from 'react';
import '../css/section.css';
import martin from "../assets/martinchouadoc.jpg";

function Staff() {
  return (
    <section className="staff" id="staff">
      <h2>Staff Profesional</h2>
      <div className="staff-grid">
        <div className="staff-item">
          <img src={martin} alt="Dr. Profesional" className="image-placeholder" />
          <h3>Dr.Choua Martin</h3>
          <p>Nefrologo-Director Medico</p>
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