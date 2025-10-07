// src/sections/Testimonials.jsx
import "../css/testimonials.css";

const testimonials = [
  {
    id: 1,
    role: "Paciente en hemodiálisis",
    name: "Julio L.",
    text:
      "Al principio tenía mucho miedo de empezar la diálisis. No sabía cómo iba a cambiar mi vida ni si iba a poder seguir haciendo las cosas que me gustan. En Nefrogen me acompañaron desde el primer día, me explicaron cada paso y siempre me sentí cuidado. Hoy puedo decir que, gracias al equipo, recuperé mi rutina y me siento con más energía. Sé que estoy en buenas manos."
  },
  {
    id: 2,
    role: "Paciente con enfermedad renal crónica",
    name: "Raul R.",
    text:
      "Me diagnosticaron enfermedad renal crónica hace tres años y pensé que iba a ser el fin de todo lo que conocía. En el centro encontré no solo médicos, sino personas que me escucharon, me orientaron con mi alimentación y me enseñaron a cuidarme. Hoy sigo trabajando, compartiendo tiempo con mi familia y con controles regulares. No es fácil, pero acá nunca me sentí solo."
  },
  {
    id: 3,
    role: "Familiar de paciente",
    name: "", // si no querés mostrar nombre, dejá vacío
    text:
      "Mi mamá asiste a diálisis en Nefrogen y desde el primer día sentimos tranquilidad. El trato humano del equipo es increíble: siempre hay alguien para responder preguntas y acompañarnos. Lo que más valoramos es que no solo se ocupan de la parte médica, sino también del bienestar emocional. Para nuestra familia fue un gran alivio encontrar este lugar."
  }
];

export default function Testimonials() {
  return (
    <section className="testi section" aria-labelledby="testi-title">
      <div className="testi-head">
        <h2 id="testi-title" className="testi-title">Comentarios</h2>
      </div>

      <ul className="testi-grid" role="list">
        {testimonials.map((t) => (
          <li key={t.id} className="testi-card" role="listitem" aria-label={`Testimonio: ${t.role}`}>
            <figure className="testi-figure">
              <blockquote className="testi-text">“{t.text}”</blockquote>
              <figcaption className="testi-author">
                <div className="testi-id">
                  <div className="testi-avatar" aria-hidden="true">
                    {((t.name || t.role).trim()[0] || "•").toUpperCase()}
                  </div>
                  <div className="testi-meta">
                    <span className="testi-name">{t.name ? t.name : t.role}</span>
                    {t.name ? <span className="testi-role">{t.role}</span> : null}
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
