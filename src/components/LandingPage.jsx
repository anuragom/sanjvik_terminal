import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Hero from './MainContent';
import AboutSection from './About';
import ServiceSection from './Services';
import Footer from './Footer';
import OurFacility from './Overview';
import StrategicLocation from './StrategicLocation';
import SanjvikOverview from './Vision';

import Testimonial from './Testimonial';
import BlogSection from './Blog';
import GroupOfCompany from '../pages/GroupOfCompany';
import OurCompany from './GroupOfCompany';

function LandingPage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero/>
        <AboutSection/>
        <ServiceSection/>
        <OurFacility/>
      
        <StrategicLocation/>
       
        <GroupOfCompany/>
      
        {/* <Testimonial/> */}
        <OurCompany/>
        <BlogSection/>
        
        <Footer/>
      </div>
    </>
  );
}

export default LandingPage;