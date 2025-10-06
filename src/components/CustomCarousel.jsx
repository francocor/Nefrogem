import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CustomCarousel.css';
import PersonalCompleto from "../assets/FOTOEQUIPO.jpg";
import NefrogemFrente from "../assets/neofrogen-002.webp";
import NefrogemInterior from "../assets/neofrogen-003.webp";
import Nefrogen4 from "../assets/carrusel-inicio-4.webp";


function CustomCarousel() {
  return (
    <Carousel fade interval={5000}>

      <Carousel.Item>
        <div
          className="carousel-fullwidth"
          style={{ backgroundImage: `url(${NefrogemFrente})` }}
        ></div>
        <Carousel.Caption>
          <h3>Nuestra prioridad son los pacientes</h3>
          <p>Servicios médicos en los
          que puede confiar</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="carousel-fullwidth"
          style={{ backgroundImage: `url(${Nefrogen4})` }}
        ></div>
        <Carousel.Caption>
          <h3>Nuestra prioridad son los pacientes</h3>
          <p>Clínica de hemodiálisis de Lunes a Sábado 
            de 05:00 a 20:00
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="carousel-fullwidth"
          style={{ backgroundImage: `url(${PersonalCompleto})` }}
        ></div>
        <Carousel.Caption>
          <h3>Nuestra prioridad son los pacientes</h3>
          <p>La Nefrología del
          Futuro, Hoy</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="carousel-fullwidth"
          style={{ backgroundImage: `url(${NefrogemInterior})` }}
        ></div>
        <Carousel.Caption>
          <h3>Nuestra prioridad son los pacientes</h3>
          <p>Horario Administrativo de Lunes a Viernes de 
            8:30 a 18:30 
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CustomCarousel;