import "../css/equiponefrogen.css";
import martin from "../assets/ChouaMartin.png"
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
import lauracarro from "../assets/LauraCarro.jpg";
import lilibeth from "../assets/LilibethCantos.png";
import claudiamanzanares from "../assets/claudiamanzanares.jpg";

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
