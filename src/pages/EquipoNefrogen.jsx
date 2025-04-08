import "../css/equiponefrogen.css";
import ariasMaria from "../assets/ARIASMARIADELVALLE.jpg";
import barrazajairo from "../assets/BARRAZAJAIRO.jpg";
import capardocarlos from "../assets/CAPARDOCARLOS.jpg";
import castroyesica from "../assets/CASTROYESICA.jpg";
import chasampifederico from "../assets/CHASAMPIFEDERICO.jpg";
import cordobavanessa from "../assets/CORDOBAVANESSA.jpg";
import galindezbrenda from "../assets/GALINDEZBRENDA.jpg";
import jabalollasanapaula from "../assets/JABALOLLASANAPAULA.jpg";
import jaimematias from "../assets/JAIMEMATIAS.jpg";
import martinezluciana from "../assets/MARTINEZLUCIANA.jpg";
import medinarocio from "../assets/MEDINAROCIO.jpg";
import monterosmariajose from "../assets/MONTEROSMARIAJOSE.jpg";
import orsojosefina from "../assets/ORSOJOSEFINA.jpg";
import quirogamariaemilia from "../assets/QUIROGAMARIAEMILIA.jpg";
import rivadeneirasabrina from "../assets/RIVADENEIRASABRINA.jpg";
import rodriguezbelen from "../assets/RODRIGUEZBELEN.jpg";
import rojascarla from "../assets/ROJASCARLA.jpg";
import sosalujan from "../assets/SosaLujan.jpg";

const sections = [
  {
    title: "Médicos",
    members: [
      { image: capardocarlos, name: "Carlos Capardo", description: "Nefrólogo" },
      { image: jaimematias, name: "Matías Jaime", description: "Médico Clínico" },
      { image: chasampifederico, name: "Federico Chasampi", description: "Médico Clínico" },
    ],
  },
  {
    title: "Enfermería",
    members: [
      { image: ariasMaria, name: "María del Valle Arias", description: "Enfermera" },
      { image: barrazajairo, name: "Jairo Barraza", description: "Enfermero" },
      { image: castroyesica, name: "Yesica Castro", description: "Enfermera" },
      { image: galindezbrenda, name: "Brenda Galíndez", description: "Enfermera" },
      { image: sosalujan, name: "Luján Sosa", description: "Enfermera" },
    ],
  },
  {
    title: "Administración y Apoyo",
    members: [
      
      { image: rivadeneirasabrina, name: "Sabrina Rivadeneira", description: "Administración" },
      { image: rodriguezbelen, name: "Belén Rodríguez", description: "Recepción" },
      { image: rojascarla, name: "Carla Rojas", description: "Recepción" },
    ],
  },
  {
    title: "Equipo de Trabajo Social y Psicología",
    members: [
      { image: orsojosefina, name: "Josefina Orso", description: "Psicóloga" },
      { image: quirogamariaemilia, name: "María Emilia Quiroga", description: "Nutricionista" },
      { image: monterosmariajose, name: "María José Monteros", description: "Trabajadora Social" },
      { image: medinarocio, name: "Rocío Medina", description: "Asistente Social" },
      { image: jabalollasanapaula, name: "Paula Jabalolla", description: "Asistente Terapéutica" },
      { image: martinezluciana, name: "Luciana Martínez", description: "Psicóloga" },
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EquipoNefrogen;
