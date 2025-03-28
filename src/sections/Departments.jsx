import React, { useRef }  from 'react';
import '../css/departments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faUserNurse, faBrain, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { GiKidneys } from 'react-icons/gi';
import dptoEnfermeria from "../assets/dpto-enfermeria.jpg";
import dptoHemodialisis from "../assets/dpto-hemodialisis1.jpg";
import dptoPsicologia from "../assets/dpto-psicologia.jpg";
import dptoNefrologia from "../assets/nefrologia.jpg";
import dptoNutricion from "../assets/Nutricion.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Departments() {
  const departments = [
    {
      id: 1,
      title: "Nefrología",
      description: "Descripción del departamento de Nefrología.",
      image: dptoNefrologia,
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
      image: dptoNutricion,
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
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false
  };
  const handleCardClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
      console.log("Slider pausado");
  
      // Reanudar después de 5 segundos
      setTimeout(() => {
        sliderRef.current?.slickPlay();
        console.log("Slider reanudado");
      }, 5000);
    }
  };

  return (
    <section className="departments" id="departments">
      <h2>Departamentos</h2>
      <Slider ref={sliderRef}
      
      {...settings}>
        {departments.map((dept) => (
          <div key={dept.id} onClick={handleCardClick} className="slider-item">
<div  className="department-card">
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
