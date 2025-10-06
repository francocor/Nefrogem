import "../css/equiponefrogen.css";
import martin from "../assets/DR. MARTINCHOUA-NEFROLOGOYDIRECTORMEDICO.jpg";
import emmamuller from "../assets/DRA.EMMAMULLER-NEFROLOGA.jpg"
import orsojosefina from "../assets/DRA.JOSEFINAORSO-COORDINACIONSTAFFMEDICO.jpg";
import gustavolobo from "../assets/DR.GUSTAVOLOBO-CIRUJANOGENERALESPECIALISTAENLAPAROSCOPÍA.jpg";
import sosalujan from "../assets/DRA.LUJANSOSA-STAFFMEDICO.jpg";
import capardocarlos from "../assets/DR.CARLOSCAPARDO-STAFFMEDICO.jpg";
import monterosmariajose from "../assets/DRA.MARIAJOSEMONTEROS-STAFFMEDICO.jpg";
import claudiamanzanares from "../assets/CLAUDIAMANZANAREZ-LIC.ENTRABAJOSOCIAL.png";
import martinezluciana from "../assets/LUCIANAMARTINEZ-LIC.ENPSICOLOGIA.jpg";
import lauracarro from "../assets/LAURACARRO-LIC.ENNUTRICIÓN.jpg";
import emiliaquiroga from "../assets/EMILIA QUIROGA-LIC.ENNUTRICIONYCOORDINADORAINTERDISCIPLINRIA.jpg";
import cordobavanessa from "../assets/CORDOBAVANESSA-ENFERMERAUNIVERSITARIA.jpg";
import castroyesica from "../assets/YESICACASTRO-ENFERMERAUNIVERSITARIA.jpg";
import jaimematias from "../assets/JAIMEMATIAS-ENFERMEROPROFESIONAL.jpg";
import mariaarias from "../assets/MARIAARIAS-ENFERMERAPROFESIONAL.jpg";
import barrazajairo from "../assets/BARRAZAJAIRO-ENFERMEROPROFESIONAL.jpg";
import galindezbrenda from "../assets/BRENDAGALINDEZ-ENFERMERAPROFESIONAL.jpg";
import rivadeneirasabrina from "../assets/SABRINARIVADENEIRA-ENFERMERAPROFESIONAL.jpg";
import rodriguezbelen from "../assets/RODRIGUEZMARIABELEN.jpg";
import rojascarla from "../assets/CARLAROJAS-ENFERMERAPROFESIONAL.jpg";
import medinarocio from "../assets/MEDINAROCIO-ENFERMERAPROFESIONAL.jpg";
import jabalollasanapaula from "../assets/ANAPAULAJABALOLLAS-ENFERMERAPROFESIONAL.jpg";
import fatimacastillo from "../assets/FÁTIMACASTILLO-ENFERMERAPROFESIONAL.jpg";
import sofiamaciel from "../assets/SOFIAMACIEL-ENFERMERAPROFESIONAL.jpg";
import lilibeth from "../assets/LILIBETHCANTOS-SECRETARIAADMINISTRATIVA.jpg";

const sections = [
  {
    title: "Médicos",
    members: [
      { image: martin, name: "Dr.Martín Choua", description: "Nefrólogo - Director Médico" },
      { image: emmamuller, name: "Dra. Emma Muller", description: "Nefróloga"},
      { image: orsojosefina, name: "Josefina Orso", description: "Coordinadora" },
      { image: capardocarlos, name: "Dr.Carlos Capardo", description: "Staff Medico" },
      { image: monterosmariajose, name: "María José Monteros", description: "Staff Medico" },
    ],
  },
  {
    title: "Consultorios Externos",
    members: [
      { image: gustavolobo, name: "Dr.Gustavo Lobo", description: "Cirujano General - Especialista en Laparoscopía" },
      { image: lauracarro, name: "Laura Carro", description: "Lic. en Nutricion", online: true },
      { image: sosalujan, name: "Dra.Luján Sosa", description: "Staff Medico" },
    ],
  },
  {
    title: "Trabajo Social, Psicología y Nutricion",
    members: [
      { image: claudiamanzanares, name: "Claudia Manzanares", description: "Lic. en Trabajo Social"},
      { image: martinezluciana, name: "Luciana Martínez", description: "Psicóloga"},
      { image: emiliaquiroga, name: "María Emilia Quiroga", description: "Lic. en Nutricion - Coordinadora Interdisciplinaria" },
    ],
  },
  {
    title: "Enfermería",
    members: [
      { image: cordobavanessa, name: "Vanessa Córdoba", description: "Jefa de Enfermería - Enfermera Universitaria" },
      { image: castroyesica, name: "Yesica Castro", description: "Coordinadora de Enfermería - Enfermera Universitaria" },
      { image: jaimematias, name: "Matías Jaime", description: "Enfermero Profesional" },
      { image: mariaarias, name: "María del Valle Arias", description: "Enfermera Profesional" },
      { image: barrazajairo, name: "Jairo Barraza", description: "Enfermero Profesional" },
      { image: galindezbrenda, name: "Brenda Galíndez", description: "Enfermera Profesional" },
      { image: rivadeneirasabrina, name: "Sabrina Rivadeneira", description: "Enfermera Profesional" },
      { image: rodriguezbelen, name: "Belén Rodríguez", description: "Enfermera Profesional" },
      { image: rojascarla, name: "Carla Rojas", description: "Enfermera Profesional" },
      { image: medinarocio, name: "Rocío Medina", description: "Enfermera Profesional" },
      { image: jabalollasanapaula, name: "Paula Jabalolla", description: "Enfermera Profesional" },
      { image: fatimacastillo, name: "Fátima Castillo", description: "Enfermera Profesional" },
      { image: sofiamaciel, name: "Sofía Maciel", description: "Enfermera Profesional" },
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
