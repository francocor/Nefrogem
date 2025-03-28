import React from 'react';
import '../css/section.css';
import martin from "../assets/martinchouadoc.jpg";
import emiliaQuiroga from "../assets/emilia-quiroga-nutricionista.jpeg";
import josefinaOrso from "../assets/josefina orso equipo.jpg";
import claudiaManzanares from "../assets/licenciada-en-trabajo-social-claudia-manzanares.jpg";
import lucianaMartinez from "../assets/psicologa-luciana-martinez.jpeg";

function Staff() {
  const staffMembers = [
    {
      image: martin,
      name: "Dr.Choua Martin",
      description: "Nefrologo-Director Medico"
    },
    {
      image: emiliaQuiroga,
      name: "Emilia Quiroga",
      description: "Nutricionista"
    },
    {
      image: josefinaOrso,
      name: "Josefina Orso",
      description: "Equipo Nefrogen"
    },
    {
      image: claudiaManzanares,
      name: "Lic. Claudia Manzanares",
      description: "Trabajadora Social"
    },
    {
      image: lucianaMartinez,
      name: "Luciana Martinez",
      description: "Psicóloga"
    },
  ];

  return (
    <section className="staff" id="staff">
      <h2>Equipo Profesional</h2>
      <div className="slider">
        <div className="slider-track">
          {staffMembers.map((member, index) => (
            <div key={index} className="staff-item">
              <img src={member.image}
  alt={member.name}
  className={
    member.name === "Luciana Martinez" || member.name === "Lic. Claudia Manzanares"
      ? "image-custom"
      : "image-placeholder"
  } />
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
          
          {staffMembers.map((member, index) => (
            <div key={index + staffMembers.length} className="staff-item">
              <img src={member.image}
  alt={member.name}
  className={
    member.name === "Luciana Martinez" || member.name === "Lic. Claudia Manzanares"
      ? "image-custom"
      : "image-placeholder"
  }/>
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