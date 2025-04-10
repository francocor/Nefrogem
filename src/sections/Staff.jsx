import React from 'react';
import '../css/section.css';

import martin from "../assets/ChouaMartin.png";
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
import vanesacordoba from "../assets/CORDOBAVANESSA.jpg";

function Staff() {
  const staffMembers = [
    {
      image: martin,
      name: "Dr.Martin Choua",
      description: "Nefrólogo - Director Médico"
    },
    {
      image: quirogamariaemilia,
      name: "Emilia Quiroga",
      description: "Nutricionista"
    },
    {
      image: orsojosefina,
      name: "Josefina Orso",
      description: "Staff Medico"
    },
    {
      image: monterosmariajose,
      name: "María José Monteros",
      description: "Staff Medico"
    },
    {
      image: martinezluciana,
      name: "Luciana Martínez",
      description: "Psicóloga"
    },
    {
      image: ariasMaria,
      name: "María del Valle Arias",
      description: "Enfermera"
    },
    {
      image: barrazajairo,
      name: "Jairo Barraza",
      description: "Enfermero"
    },
    {
      image: vanesacordoba,
      name: "Vanesa Córdoba",
      description: "Jefa de enfermeria"
    },
    {
      image: sosalujan,
      name: "Luján Sosa",
      description: "Coordinadora Medica"
    },
    {
      image: claudiamanzanares,
      name: "Claudia Manzanares",
      description: "Trabajadora Social"
    },
    {
      image: lilibeth,
      name: "Lilibeth Cantos",
      description: "Jefa de Administracion"
    },
    {
      image: castroyesica,
      name: "Yesica Castro",
      description: "Coordinadora de Enfermeria"
    },
    {
      image: galindezbrenda,
      name: "Brenda Galíndez",
      description: "Enfermera"
    },
    {
      image: sosalujan,
      name: "Luján Sosa",
      description: "Coordinadora Medica"
    },
    {
      image: capardocarlos,
      name: "Carlos Capardo",
      description: "Medico Clinico"
    },
    {
      image: jaimematias,
      name: "Matías Jaime",
      description: "Enfermero"
    },
    {
      image: chasampifederico,
      name: "Federico Chasampi",
      description: "Enfermero"
    },
    {
      image: rivadeneirasabrina,
      name: "Sabrina Rivadeneira",
      description: "Enfermera"
    },
    {
      image: rodriguezbelen,
      name: "Belén Rodríguez",
      description: "Enfermera"
    },
    {
      image: rojascarla,
      name: "Carla Rojas",
      description: "Enfermera"
    },
    {
      image: medinarocio,
      name: "Rocío Medina",
      description: "Enfermera"
    },
    {
      image: cordobavanessa,
      name: "Vanessa Cordoba",
      description: "Jefa de Enfermeria"
    },
    {
      image: jabalollasanapaula,
      name: "Paula Jabalolla",
      description: "Enfermera"
    },
    {
      image: lauracarro,
      name: "Laura Carro",
      description: "Psicóloga"
    },
    {
      image: lilibeth,
      name: "Lilibeth Cantos",
      description: "Jefa de Administracion"
    },
    {
      image: claudiamanzanares,
      name: "Claudia Manzanares",
      description: "Lic.Trabajo Social"
    }
  ];

  return (
    <section className="staff" id="staff">
      <h2>Equipo Profesional</h2>
      <div className="slider">
        <div className="slider-track">
          {[...staffMembers, ...staffMembers].map((member, index) => (
            <div key={index} className="staff-item">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staff;
