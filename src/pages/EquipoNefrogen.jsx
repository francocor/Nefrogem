import "../css/equiponefrogen.css";
import martin from "../assets/chouamartin.webp";
import ariasMaria from "../assets/ariasmariadelvalle.webp";
import barrazajairo from "../assets/barrazajairo.webp";
import capardocarlos from "../assets/capardocarlos.webp";
import castroyesica from "../assets/castroyesica.webp";
import chasampifederico from "../assets/chasampifederico.webp";
import cordobavanessa from "../assets/cordobavanessa.webp";
import galindezbrenda from "../assets/galindezbrenda.webp";
import jabalollasanapaula from "../assets/jabalollasanapaula.webp";
import jaimematias from "../assets/jaimematias.webp";
import martinezluciana from "../assets/martinezluciana.webp";
import medinarocio from "../assets/medinarocio.webp";
import monterosmariajose from "../assets/monterosmariajose.webp";
import orsojosefina from "../assets/orsojosefina.webp";
import quirogamariaemilia from "../assets/quirogamariaemilia.webp";
import rivadeneirasabrina from "../assets/rivadeneirasabrina.webp";
import rodriguezbelen from "../assets/rodriguezbelen.webp";
import rojascarla from "../assets/rojascarla.webp";
import sosalujan from "../assets/sosalujan.webp";
import lauracarro from "../assets/lauracarro.webp";
import lilibeth from "../assets/lilibethcantos.webp";
import claudiamanzanares from "../assets/claudiamanzanares.webp";

const sections = [
  {
    title: "Médicos",
    members: [
      { image: martin, name: "Dr.Martín Choua", description: "Nefrólogo - Director Médico" },
      { image: sosalujan, name: "Dra.Luján Sosa", description: "Coordinadora Medica" },
      { image: capardocarlos, name: "Dr.Carlos Capardo", description: "Médico Clínico" },
      { image: monterosmariajose, name: "María José Monteros", description: "Staff Medico" },
      { image: orsojosefina, name: "Josefina Orso", description: "Staff Medico" },
    ],
  },
  {
    title: "Trabajo Social, Psicología y Nutricion",
    members: [
      { image: claudiamanzanares, name: "Claudia Manzanares", description: "Trabajadora Social", online: true },
      { image: martinezluciana, name: "Luciana Martínez", description: "Psicóloga", online: true },
      { image: lauracarro, name: "Laura Carro", description: "Psicóloga" },
      { image: quirogamariaemilia, name: "María Emilia Quiroga", description: "Nutricionista", online: true },
    ],
  },
  {
    title: "Enfermería",
    members: [
      { image: cordobavanessa, name: "Vanessa Córdoba", description: "Jefa de Enfermería" },
      { image: castroyesica, name: "Yesica Castro", description: "Coordinadora de Enfermería" },
      { image: jaimematias, name: "Matías Jaime", description: "Enfermero" },
      { image: chasampifederico, name: "Federico Chasampi", description: "Enfermero" },
      { image: ariasMaria, name: "María del Valle Arias", description: "Enfermera" },
      { image: barrazajairo, name: "Jairo Barraza", description: "Enfermero" },
      { image: galindezbrenda, name: "Brenda Galíndez", description: "Enfermera" },
      { image: rivadeneirasabrina, name: "Sabrina Rivadeneira", description: "Enfermera" },
      { image: rodriguezbelen, name: "Belén Rodríguez", description: "Enfermera" },
      { image: rojascarla, name: "Carla Rojas", description: "Enfermera" },
      { image: medinarocio, name: "Rocío Medina", description: "Enfermera" },
      { image: jabalollasanapaula, name: "Paula Jabalolla", description: "Enfermera" },
    ],
  },
  {
    title: "Administración",
    members: [
      { image: lilibeth, name: "Lilibeth Cantos", description: "Jefa de Administración" },
    ],
  },
];

function EquipoNefrogen() {
  return (
    <div className="equipo-nefrogen-page" style={{ padding: '80px 40px', textAlign: 'center' }}>
      <h1>Equipo Nefrogen</h1>
      <p>Bienvenido a la página de Equipo Nefrogen. Aquí podrás conocer a todo nuestro equipo y su trayectoria.</p>

      {sections.map((section, idx) => (
        <div key={idx} style={{ marginTop: '60px' }}>
          <h2 style={{ color: '#40717E', marginBottom: '30px' }}>{section.title}</h2>
          <div className="staff-card-grid">
            {section.members.map((member, index) => (
              <div key={index} className="staff-item">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.description}</p>

                {member.online && (
                  <p style={{ marginTop: '8px', color: '#40717E', fontWeight: 'bold', fontSize: '0.95rem' }}>
                    🖥️ Consultas online
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EquipoNefrogen;
