import React from 'react';
import '../css/departments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faUserNurse, faBrain, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { GiKidneys } from 'react-icons/gi';
import dptoEnfermeria from "../assets/dpto-enfermeria.jpg";
import dptoHemodialisis from "../assets/dpto-hemodialisis1.jpg";
import dptoPsicologia from "../assets/dpto-psicologia.jpg";
import dptoNefrologia from "../assets/carrusel-inicio-4.jpg";

function Departments() {
  const departments = [
    {
      id: 1,
      title: "Nefrología",
      description: "Descripción del departamento de Nefrología.",
      image: dptoNefrologia, // Se usa la imagen real
      icon: GiKidneys,
      iconType: 'react'
    },
    {
      id: 2,
      title: "Hemodiálisis",
      description: "Descripción del departamento de Hemodiálisis.",
      image: dptoHemodialisis,
      icon: faSyringe,
      iconType: 'fa'
    },
    {
      id: 3,
      title: "Nutrición",
      description: "Descripción del departamento de Nutrición.",
      image: "https://via.placeholder.com/400x300?text=Nutricion",
      icon: faAppleAlt,
      iconType: 'fa'
    },
    {
      id: 4,
      title: "Psicología",
      description: "Descripción del departamento de Psicología.",
      image: dptoPsicologia,
      icon: faBrain,
      iconType: 'fa'
    },
    {
      id: 5,
      title: "Enfermería",
      description: "Descripción del departamento de Enfermería.",
      image: dptoEnfermeria,
      icon: faUserNurse,
      iconType: 'fa'
    },
  ];

  return (
    <section className="departments" id="departments">
      <h2>Departamentos</h2>
      <div className="departments-grid">
        {departments.map((dept) => (
          <div key={dept.id} className="department-card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${dept.image})` }}
            >
              <div className="card-content">
                {dept.iconType === 'fa' ? (
                  <FontAwesomeIcon
                    icon={dept.icon}
                    size="2x"
                    style={{ marginBottom: '10px' }}
                  />
                ) : (
                  <dept.icon
                    size={32}
                    style={{ marginBottom: '10px' }}
                  />
                )}
                <h3>{dept.title}</h3>
              </div>
            </div>
            <div className="card-overlay">
              <p>Más información próximamente</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Departments;