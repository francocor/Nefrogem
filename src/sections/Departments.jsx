import React from 'react';
import '../css/departments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faSyringe, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { GiKidneys } from 'react-icons/gi';

function Departments() {
  const departments = [
    {
      id: 1,
      title: "Departamento Nefrología",
      description: "Descripción del departamento 1.",
      image: "https://via.placeholder.com/400x300?text=Departamento+1",
      icon: faStethoscope,
      iconType: 'fa'
    },
    {
      id: 2,
      title: "Departamento Nefropatía Diabética",
      description: "Descripción del departamento 2.",
      image: "https://via.placeholder.com/400x300?text=Departamento+2",
      icon: faSyringe,
      iconType: 'fa'
    },
    {
      id: 3,
      title: "Departamento Litiasis Renal",
      description: "Descripción del departamento 3.",
      image: "https://via.placeholder.com/400x300?text=Departamento+3",
      icon: faMicroscope,
      iconType: 'fa'
    },
    {
      id: 4,
      title: "Departamento Transplante Renal",
      description: "Descripción del departamento 4.",
      image: "https://via.placeholder.com/400x300?text=Departamento+4",
      icon: GiKidneys,
      iconType: 'react'
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
          ></div>
        
          <div className="card-overlay">
            <p>Más información próximamente</p>
          </div>
        
          <div className="card-content">
            {dept.iconType === 'fa' ? (
              <FontAwesomeIcon
                icon={dept.icon}
                size="2x"
                style={{ color: '#40717E', marginBottom: '10px' }}
              />
            ) : (
              <dept.icon
                size={32}
                color="#40717E"
                style={{ marginBottom: '10px' }}
              />
            )}
            <h3>{dept.title}</h3>
            <p>{dept.description}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Departments;