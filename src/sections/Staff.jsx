import React from 'react';
import '../css/section.css';

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

function Staff() {
  const staffMembers = [
    {
      image: martin,
      name: "Dr. Martin Choua",
      description: "Nefrólogo - Director Médico"
    },
    {
      image: emiliaquiroga,
      name: "Emilia Quiroga",
      description: " Lic. en Nutricion"
    },
    {
      image: orsojosefina,
      name: "Josefina Orso",
      description: "Staff Medico"
    },
    {
      image: emmamuller,
      name: "Dra. Emma Muller",
      description: "Nefróloga"
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
      image: barrazajairo,
      name: "Jairo Barraza",
      description: "Enfermero Profesional"
    },
    {
      image: cordobavanessa,
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
      description: "Lic. en Trabajo Social"
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
      description: "Enfermera Profesional"
    },
    {
      image: capardocarlos,
      name: "Carlos Capardo",
      description: "Medico Clinico"
    },
    {
      image: jaimematias,
      name: "Matías Jaime",
      description: "Enfermero Profesional"
    },
    {
      image: gustavolobo,
      name: "Dr. Gustavo Lobo",
      description: "Cirujano"
    },
    {
      image: rivadeneirasabrina,
      name: "Sabrina Rivadeneira",
      description: "Enfermera Profesional"
    },
    {
      image: rodriguezbelen,
      name: "Belén Rodríguez",
      description: "Enfermera Profesional"
    },
    {
      image: rojascarla,
      name: "Carla Rojas",
      description: "Enfermera Profesional"
    },
    {
      image: medinarocio,
      name: "Rocío Medina",
      description: "Enfermera Profesional"
    },
    {
      image: jabalollasanapaula,
      name: "Paula Jabalolla",
      description: "Enfermera Profesional"
    },
    {
      image: lauracarro,
      name: "Laura Carro",
      description: "Lic en Nutricion"
    },
    {
      image: mariaarias,
      name: "María del Valle Arias",
      description: "Enfermera Profesional"
    },
    {
      image: fatimacastillo,
      name: "Fátima Castillo",
      description: "Enfermera Profesional"
    },
    {
      image: sofiamaciel,
      name: "Sofía Maciel",
      description: "Enfermera Profesional"
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
