import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import '../css/departments.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faUserNurse, faBrain, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { GiKidneys } from 'react-icons/gi';

import dptoEnfermeria from "../assets/dpto-enfermeria.jpg";
import dptoHemodialisis from "../assets/dpto-hemodialisis1.jpg";
import dptoPsicologia from "../assets/dpto-psicologia.jpg";
import dptoNefrologia from "../assets/nefrologia.jpg";
import dptoNutricion from "../assets/Nutricion.jpg";

function Departments() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const departments = [
    {
      id: 1,
      title: "Nefrología",
      image: dptoNefrologia,
      icon: GiKidneys,
      iconType: 'react'
    },
    {
      id: 2,
      title: "Hemodiálisis",
      image: dptoHemodialisis,
      icon: faSyringe,
      iconType: 'fa'
    },
    {
      id: 3,
      title: "Nutrición",
      image: dptoNutricion,
      icon: faAppleAlt,
      iconType: 'fa'
    },
    {
      id: 4,
      title: "Psicología",
      image: dptoPsicologia,
      icon: faBrain,
      iconType: 'fa'
    },
    {
      id: 5,
      title: "Enfermería",
      image: dptoEnfermeria,
      icon: faUserNurse,
      iconType: 'fa'
    },
  ];

  // Configuración de react-slick
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,  // cada 3s avanza
    speed: 600,          // velocidad del desplazamiento
    slidesToShow: 3,     // 3 tarjetas en escritorio
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,       // oculta flechas
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Pausar el carrusel al hacer click en la tarjeta
  const handleCardClick = () => {
    if (!isPaused) {
      setIsPaused(true);
      sliderRef.current.slickPause();

      // Reanudar después de 5 segundos
      setTimeout(() => {
        setIsPaused(false);
        sliderRef.current?.slickPlay();
      }, 5000);
    }
  };

  return (
    <section className="departments" id="departments">
      <h2>Departamentos</h2>
      <Slider ref={sliderRef} {...settings}>
        {departments.map(dept => (
          <div key={dept.id} className="slider-item">
            <div className="department-card" onClick={handleCardClick}>
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
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Departments;