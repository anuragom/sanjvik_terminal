

import React from 'react';
import { motion } from 'framer-motion'; // Ensure you have installed framer-motion
import Footer from '../components/Footer';


const Services = () => {
  return (
    <div>
      <section className="bg-alice-blue py-12" id="service" aria-label="service">
      <div className="container mx-auto text-center">
        <p className="text-[#00308F] uppercase font-bold text-2xl mb-2">Our Services</p>
        <h2 className="text-prussian-blue text-4xl font-semibold mb-5">Trusted For Our Services</h2>
        <p className="text-lg mb-12">
          Sanjvik Terminals Pvt One of the leading Inland Container Depots (ICD)
        </p>
        <ul className="flex justify-center gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </ul>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

const ServiceItem = ({ service }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <div className="relative bg-white border-4 border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:border-[#00308F] transform hover:scale-105 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <h3 className="text-[#00308F] text-5xl mb-4">{service.icon}</h3>
          <h3 className="text-prussian-blue text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="mb-4">{service.description}</p>
          <a 
            href={service.url} // Link to the specific service page
            className="text-[#00308F] text-lg uppercase"
          >
            View Detail
          </a>
        </div>
      </div>
    </motion.li>
  );
};

const services = [
  {
    title: 'Multi-model Transportation',
    description: 'Our aim is to optimize and improve your supply chain.',
    image: './Banners/Multimodal.jpg',
    url: '/multi-model-transportation' // Add URL for this service
  },
  {
    title: 'Terminal Management',
    description: 'Efficient management of terminal operations.',
    image: './landingPage/landing4.png',
    url: '/terminal-management' // Add URL for this service
  },
  {
    title: 'Custom Clearance',
    description: 'Customs clearance for faster shipping.',
    image: './landingPage/port.jpg',
    url: '/custom-clearance' // Add URL for this service
  },
  {
    title: 'Warehousing',
    description: 'Advance, secure, and efficient warehousing and spacing solutions.',
    image: './landingPage/landing3.png',
    url: '/warehousing' // Add URL for this service
  },
];

export default Services;
