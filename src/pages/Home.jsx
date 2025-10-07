import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import Acerca from '../sections/Acerca';
import Staff from '../sections/Staff';
import Departments from '../sections/Departments';
import Announcements from '../sections/Announcements';
import FaqHemodialisis from '../sections/FaqHemodialisis'; 
import Testimonials from '../sections/Testimonials';
import Location from '../sections/Location';

function Home() {
  return (
    <main className="home">
      <CustomCarousel />
      <Acerca />
      <Staff />
      <Departments />
      <Announcements />
      <FaqHemodialisis />          
      <Testimonials />
      {/* <div className="row">
        <div className="col-md-6">
        </div>
        <div className="col-md-6">
          <Location />
        </div>
      </div> */}
    </main>
  );
}

export default Home;