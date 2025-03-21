import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import Acerca from '../sections/Acerca';
import Staff from '../sections/Staff';
import Departments from '../sections/Departments';
import Testimonials from '../sections/Testimonials';
import Location from '../sections/Location';

function Home() {
  return (
    <main className="home">
      <CustomCarousel />
      <Acerca />
      <Staff />
      <Departments />
      <Testimonials />
      <Location />
    </main>
  );
}

export default Home;