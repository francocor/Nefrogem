import React from 'react';
import '../css/section.css';

function Acerca() {
  return (
    <section className="acerca" id="acerca">
      <h2>Acerca de Nosotros</h2>
      <div className="acerca-cards">
        <div className="acerca-card">
          <h3>Historia</h3>
          <p>
            Con más de 5 años de experiencia, nuestro centro médico nació para brindar una atención integral y de calidad, evolucionando siempre para responder a las necesidades de la comunidad.
          </p>
        </div>
        <div className="acerca-card">
          <h3>Misión</h3>
          <p>
            Nuestra misión es brindar atención médica de calidad, integrando tecnología y profesionalismo para el bienestar de nuestros pacientes.
          </p>
        </div>
        <div className="acerca-card">
          <h3>Visión</h3>
          <p>
            Ser referentes en el ámbito de la salud, ofreciendo servicios innovadores y personalizados que mejoren la calidad de vida de nuestra comunidad.
          </p>
        </div>
        <div className="acerca-card">
          <h3>Valores</h3>
          <p>
            Compromiso, ética, excelencia y empatía son los pilares que guían cada uno de nuestros servicios.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Acerca;