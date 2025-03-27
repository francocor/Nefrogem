import React, { useState } from 'react';
import '../css/turnos.css';

function Turnos() {
  const [selectedProfessional, setSelectedProfessional] = useState('');
  
  return (
    <main className="turnos">
      <h2>Turnos</h2>
      <form className="turnos-form">
        <div className="form-group">
          <label>Seleccione al Profesional:</label>
          <select 
            value={selectedProfessional}
            onChange={(e) => setSelectedProfessional(e.target.value)}
          >
            <option value="">-- Seleccione el profesional--</option>
            <option value="Dr. Profesional">Dr. Profesional</option>
            <option value="Dra. Ejemplo">Dra. Ejemplo</option>
          </select>
        </div>
        {selectedProfessional && (
          <div className="availability">
            <p>Días y Horas Disponibles:</p>
            <div className="schedule">
              <span>Lunes 10:00 - 14:00</span>
              <span>Miércoles 15:00 - 19:00</span>
            </div>
          </div>
        )}
        <div className="form-group">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensaje"></textarea>
        </div>
        <button type="submit">Solicitar Turno</button>
      </form>
      <p className="note">Este formulario se enviará al WP del centro para su confirmacion.</p>
    </main>
  );
}

export default Turnos;