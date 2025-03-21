import React from 'react';
import '../css/section.css';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonios</h2>
      <div className="testimonial-item">
        <p>"Excelente atención y profesionalismo."</p>
        <span>- Paciente Satisfecho</span>
      </div>
      {/* Agrega más testimonios según necesites */}
    </section>
  );
}

export default Testimonials;