import React from 'react';
import '../css/section.css';

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
import vanesacordoba from "../assets/cordobavanessa.webp";

function Staff() {
  const staffMembers = [
    {
      image: martin,
      name: "Dr. Martin Choua",
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
      description: "Nutricionista"
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
