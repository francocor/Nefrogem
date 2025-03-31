import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../css/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si el campo es telefono, solo aceptar números
    if (name === 'telefono') {
      const soloNumeros = value.replace(/\D/g, ''); // Elimina todo lo que no sea dígito
      setFormData({ ...formData, [name]: soloNumeros });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, telefono, email, mensaje } = formData;

    if (!nombre || !telefono || !email || !mensaje) {
      Swal.fire({
        icon: 'warning',
        title: 'Faltan datos',
        text: 'Por favor completá todos los campos antes de enviar.',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: 'Gracias por contactarnos. Te responderemos pronto.',
    }).then(() => {
      // Construir el mensaje predeterminado para WhatsApp
      const whatsappNumber = '543815996586'; // Reemplaza este valor con el número real
      const whatsappMessage = `Hola, tengo un mensaje de contacto. Mi nombre es ${nombre}, mi teléfono es ${telefono}, mi email es ${email} y mi mensaje es: ${mensaje}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    });

    setMensajeEnviado(true);

    // Limpiar el formulario
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      mensaje: '',
    });
  };

  return (
    <main className="contact">
      <div className="contact-container">
        <div className="row">
          <h2>Contacto</h2>
        </div>
        <div className="row container-contact justify-content-center">
          <div className="col-12 col-md-6 form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
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
              <button
                type="submit"
                style={{
                  background: mensajeEnviado ? 'green' : '#40717E',
                  borderRadius: '32px',
                  cursor: mensajeEnviado ? 'not-allowed' : 'pointer',
                  color: 'white',
                }}
                disabled={mensajeEnviado}
              >
                {mensajeEnviado ? 'Mensaje Enviado' : 'Enviar'}
              </button>
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
