import React from 'react';
import '../css/departments.css';

function Departments() {
  const departments = [
    {
      id: 1,
      title: "Departamento 1",
      description: "Descripción del departamento 1.",
      image: "https://via.placeholder.com/400x300?text=Departamento+1",
    },
    {
      id: 2,
      title: "Departamento 2",
      description: "Descripción del departamento 2.",
      image: "https://via.placeholder.com/400x300?text=Departamento+2",
    },
    {
      id: 3,
      title: "Departamento 3",
      description: "Descripción del departamento 3.",
      image: "https://via.placeholder.com/400x300?text=Departamento+3",
    },
    {
      id: 4,
      title: "Departamento 4",
      description: "Descripción del departamento 4.",
      image: "https://via.placeholder.com/400x300?text=Departamento+4",
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
            <div className="card-content">
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