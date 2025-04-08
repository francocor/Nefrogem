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

function Staff() {
  const staffMembers = [
    {
      image: martin,
      name: "Dr. Choua Martin",
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
      description: "Psicóloga"
    },
    {
      image: monterosmariajose,
      name: "María José Monteros",
      description: "Trabajadora Social"
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
      image: castroyesica,
      name: "Yesica Castro",
      description: "Enfermera"
    },
    {
      image: galindezbrenda,
      name: "Brenda Galíndez",
      description: "Enfermera"
    },
    {
      image: sosalujan,
      name: "Luján Sosa",
      description: "Enfermera"
    },
    {
      image: capardocarlos,
      name: "Carlos Capardo",
      description: "Nefrólogo"
    },
    {
      image: jaimematias,
      name: "Matías Jaime",
      description: "Clínico"
    },
    {
      image: chasampifederico,
      name: "Federico Chasampi",
      description: "Clínico"
    },
    {
      image: rivadeneirasabrina,
      name: "Sabrina Rivadeneira",
      description: "Administración"
    },
    {
      image: rodriguezbelen,
      name: "Belén Rodríguez",
      description: "Recepción"
    },
    {
      image: rojascarla,
      name: "Carla Rojas",
      description: "Recepción"
    },
    {
      image: medinarocio,
      name: "Rocío Medina",
      description: "Asistente Social"
    },
    {
      image: cordobavanessa,
      name: "Vanessa Cordoba",
      description: "Recepción"
    },
    {
      image: jabalollasanapaula,
      name: "Paula Jabalolla",
      description: "Terapéutica"
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