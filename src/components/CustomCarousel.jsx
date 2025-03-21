import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CustomCarousel.css';

function CustomCarousel() {
  return (
    <Carousel fade interval={5000}>
      <Carousel.Item>
        <div className="carousel-fullwidth image1"></div>
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Descripción del slide 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-fullwidth image2"></div>
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Descripción del slide 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-fullwidth image3"></div>
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Descripción del slide 3.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;