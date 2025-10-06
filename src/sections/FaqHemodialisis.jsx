import "../css/FaqHemodialisis.css";

const faqs = [
  {
    q: "¿Qué es la hemodiálisis?",
    a: "Es un tratamiento que filtra y depura la sangre cuando los riñones no pueden hacerlo. Se realiza con una máquina y un filtro (dializador) que eliminan toxinas y exceso de líquidos."
  },
  {
    q: "¿Cuánto dura y con qué frecuencia se realiza?",
    a: "En la mayoría de los casos se realiza 3 veces por semana y cada sesión dura entre 3 y 4 horas, según indicación del nefrólogo."
  },
  {
    q: "¿Qué acceso vascular se utiliza?",
    a: "Lo más habitual es la fístula arteriovenosa (FAV) en el brazo. También pueden usarse catéteres temporales o permanentes según cada situación clínica."
  },
  {
    q: "¿Qué cuidados debo tener antes y después de cada sesión?",
    a: "Respetar las indicaciones de líquidos, peso interdialítico y dieta; traer los estudios o medicación indicados; y cuidar el acceso vascular (no tomar presión ni extraer sangre del brazo de la fístula, mantener curas limpias si hay catéter)."
  },
  {
    q: "¿Qué síntomas puedo sentir durante la sesión?",
    a: "Algunas personas pueden presentar calambres, cansancio, mareos o baja de presión. El equipo ajusta el tratamiento para prevenir o tratar estos síntomas."
  },
  {
    q: "¿Puedo comer o tomar líquidos el día de diálisis?",
    a: "Depende de tu plan individual. En general se recomienda moderar líquidos y sodio. Tu nutricionista y nefrólogo te darán pautas personalizadas."
  }
];

export default function FaqHemodialisis() {
  return (
    <section className="faq section" aria-labelledby="faq-title">
      <div className="faq-head">
        <h2 id="faq-title" className="faq-title">Preguntas frecuentes · Hemodiálisis</h2>
      </div>

      <div className="faq-list" role="list">
        {faqs.map((item, i) => (
          <details key={i} className="faq-item" role="listitem">
            <summary className="faq-question">
              {item.q}
            </summary>
            <div className="faq-answer">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      <p className="faq-disclaimer">
        *La información es orientativa y no sustituye la evaluación médica. Ante dudas,
        consultá con tu nefrólogo/a o con nuestro equipo.
      </p>
    </section>
  );
}