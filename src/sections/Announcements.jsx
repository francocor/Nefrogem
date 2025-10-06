// src/components/Announcements.jsx
import "../css/Announcements.css";

function domainFrom(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "";
  }
}

export default function Announcements() {
  const items = [
    {
      id: 1,
      tag: "Instagram",
      dateISO: "2025-10-05",
      dateText: "05/10/2025",
      url: "https://www.instagram.com/p/DOgjeA9EUcQ/",
      preview: {
        title: "Nueva publicación en Instagram",
        description: "Conocé las últimas novedades y actividades de Nefrogen.",
        image: "/img/instagram-preview.jpg"
      }
    },
    {
      id: 2,
      tag: "Instagram",
      dateISO: "2025-09-28",
      dateText: "28/09/2025",
      url: "https://www.instagram.com/p/DN1sB-sWHgF/",
      preview: {
        title: "Actualización de coberturas",
        description: "Sumamos nuevas obras sociales y beneficios para pacientes.",
        image: "/img/instagram-preview.jpg"
      }
    },
    {
      id: 3,
      tag: "Instagram",
      dateISO: "2025-09-20",
      dateText: "20/09/2025",
      url: "https://www.instagram.com/p/DNeUEEqRpAW/",
      preview: {
        title: "Campaña de prevención renal",
        description: "Participá de nuestra campaña gratuita de chequeo y prevención.",
        image: "/img/instagram-preview.jpg"
      }
    }
  ];

  return (
    <section className="ann section" aria-labelledby="ann-title">
      <div className="ann-head">
        <h2 id="ann-title" className="ann-title">Anuncios</h2>
      </div>

      <ul className="ann-grid" role="list">
        {items.map((a) => {
          const hasImg = a.preview?.image;
          return (
            <li key={a.id} className="ann-card" role="listitem">
              <a className="ann-link" href={a.url} target="_blank" rel="noopener noreferrer">
                <div className="ann-media" aria-hidden={!hasImg}>
                  {hasImg ? (
                    <img src={a.preview.image} alt="" loading="lazy" decoding="async" />
                  ) : (
                    <div className="ann-media--placeholder">
                      <span>Sin imagen</span>
                    </div>
                  )}
                </div>

                <div className="ann-body">
                  <div className="ann-meta">
                    <span className="ann-badge">{a.tag}</span>
                    <time className="ann-date" dateTime={a.dateISO}>{a.dateText}</time>
                  </div>

                  <h3 className="ann-card-title">{a.preview.title}</h3>
                  <p className="ann-card-excerpt">{a.preview.description}</p>
                  <div className="ann-source">{domainFrom(a.url)}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
