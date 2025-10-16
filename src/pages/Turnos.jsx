import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../css/turnos.css';

function Turnos() {
  const [selectedProfessional, setSelectedProfessional] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  });
  const [turnoEnviado, setTurnoEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'telefono') {
      const soloNumeros = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: soloNumeros });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, telefono, email, mensaje } = formData;

    if (!selectedProfessional || !nombre || !telefono || !email || !mensaje) {
      Swal.fire({
        icon: 'warning',
        title: 'Faltan datos',
        text: 'Por favor completá todos los campos antes de solicitar el turno.',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Turno solicitado',
      text: 'Tu solicitud fue enviada correctamente. Nos pondremos en contacto por WhatsApp.',
    }).then(() => {
      // Formateamos el número para WhatsApp (sin "+" ni espacios)
      const whatsappNumber = '543815996586';
      const whatsappMessage = `Hola, solicito turno con ${selectedProfessional}. Mi nombre es ${nombre} y mi teléfono es ${telefono}.`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    });

    setTurnoEnviado(true);
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      mensaje: '',
    });
    setSelectedProfessional('');
  };

  return (
    <main className="turnos">
      <h2 className="tituloturno">Turnos</h2>
      <form className="turnos-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Seleccione al Profesional:</label>
          <select 
            value={selectedProfessional}
            onChange={(e) => setSelectedProfessional(e.target.value)}
          >
            <option value="">-- Seleccione el profesional --</option>
            <option value="Dr. Martin Choua">Dr. Martin Choua - Nefrologo</option>
            <option value="Dra. Muller Emma">Dra. Muller Emma - Nefrologa</option>
            <option value="Lic. Laura Carro">Laura Carro - Lic. en Nutricion</option>
            <option value="Dra. Josefina Orso">Dra. Josefina Orso - Medicina General</option>
            <option value="Dr. Gustavo Lobo">Dr. Gustavo Lobo - Cirugia General Laparoscopica</option>
          </select>
        </div>
        {selectedProfessional && (
          <div className="availability">
            <p>Días y Horas Disponibles:</p>
            <div className="schedule">
              {selectedProfessional === "Dr. Martin Choua" && (
                <span>Lunes a viernes de 9:00 a 12:00</span>
              )}
              {selectedProfessional === "Dra. Muller Emma" && (
                <span>Viernes de 9:00 a 13:00</span>
              )}
              {selectedProfessional === "Lic. Laura Carro" && (
                <span>Jueves de 17:00 a 20:00</span>
              )}
              {selectedProfessional === "Dra. Josefina Orso" && (
                <span>Miércoles de 14:00 a 19:00</span>
              )}
              {selectedProfessional === "Dr. Gustavo Lobo" && (
                <span>Jueves de 9:00 a 14:00</span>
              )}
            </div>
          </div>
        )}
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            background: turnoEnviado ? 'green' : '#40717E',
            borderRadius: '32px',
            cursor: turnoEnviado ? 'not-allowed' : 'pointer',
            color: 'white'
          }}
          disabled={turnoEnviado}
        >
          {turnoEnviado ? 'Turno Solicitado' : 'Solicitar Turno'}
        </button>
      </form>
      <p className="note">Este formulario se enviará al WhatsApp del centro para su confirmación.</p>
    </main>
  );
}

export default Turnos;
