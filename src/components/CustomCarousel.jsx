import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CustomCarousel.css';
import PersonalCompleto from "../assets/PersonalCompleto.jpg";
import NefrogemFrente from "../assets/NEOFROGEN-002.jpg";
import NefrogemInterior from "../assets/NEOFROGEN-003.jpg";
import NefogenAdm from "../assets/carrusel-inicio-1.jpg";
import Nefrogen2 from "../assets/carrusel-inicio-2.jpg";
import Nefrogen3 from "../assets/carrusel-inicio3.jpg";
import Nefrogen4 from "../assets/carrusel-inicio-4.jpg"


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
          style={{ backgroundImage: `url(${Nefrogen2})` }}
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
          style={{ backgroundImage: `url(${Nefrogen3})` }}
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
          <p>Servicios médicos en los
          que puede confiar</p>
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
          <p>Atención continuada
          De Lunes a Viernes.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="carousel-fullwidth"
          style={{ backgroundImage: `url(${NefogenAdm})` }}
        ></div>
        <Carousel.Caption>
          <h3>Nuestra prioridad son los pacientes</h3>
          <p>Atención continuada
          De Lunes a Viernes.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CustomCarousel;