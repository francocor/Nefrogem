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
      {/* <div className="row">
        <div className="col-md-6">
          <Testimonials />
        </div>
        <div className="col-md-6">
          <Location />
        </div>
      </div> */}
    </main>
  );
}

export default Home;