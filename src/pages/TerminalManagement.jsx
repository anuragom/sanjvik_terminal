


import React, { useEffect, useState } from 'react';
import { FaTools, FaShippingFast, FaWarehouse } from 'react-icons/fa'; // Importing icons
import Footer from '../components/Footer';
import { motion } from 'framer-motion'; // Import motion

const offeringsData = [
  {
    title: ' TXR Examination',
    description:
      'At the terminal, we provide comprehensive TXR Examination services to ensure the safe and reliable movement of rail wagons. The integrity of rail wagons is critical to the seamless transportation of goods and our expert team is dedicated to maintaining the highest safety standards. We have two railway lines and both dedicated lines have this facility. Due to this, the rakes are not required to proceed to an alternate station for examination, resulting in improved turnaround time for the rake',
    description2: 
       'TXR Inspection is a detailed examination of rail wagons that are approved and certified by the Indian Railway. This process ensures that all wagons meet stringent safety requirements before they are cleared for freight operations. Our team follows a meticulous checklist, inspecting key components of the wagons to guarantee that they are in optimal condition for carrying goods.',  
    details: [
      ' Brake System Check',
      ' Coupling and Buffer Inspection',
      'Axle and Wheel Examination',
      ' Frame and Body Inspection',
      'Load Security ',
    ],
    icon: <FaTools />,
  },
  {
    title: ' Container Repairing',
    description:
      'At Sanjvik, we offer comprehensive in-house container repair and maintenance services equipped with advanced technology and equipment. Our dedicated facility is designed to handle a wide range of repair needs, ensuring that containers are maintained to the highest standards. With ample space allocated for these activities, we can efficiently manage and execute repairs, minimizing downtime and ensuring that containers are returned to service promptly. Our skilled technicians use the latest equipment to perform thorough inspections, repairs and maintenance, ensuring the reliability and safety of your containers throughout their operational lifespan.',
    icon: <FaWarehouse />,
  },
  {
    title: ' Container Leasing',
    description:
      'We offer a range of high-quality containers available for lease. Our container leasing service provides a flexible and cost-effective solution to meet your shipping and storage needs. Our leasing facility is designed to accommodate various requirements, from short-term projects to long-term container leasing solutions. With well-maintained containers and efficient service, we ensure that your cargo is securely transported and stored. Our dedicated team works closely with you to provide tailored leasing options, optimizing your supply chain operations and enhancing overall efficiency.',
    icon: <FaShippingFast />,
  },
];

const TerminalManagement = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className=" py-10 min-h-screen">
      {/* Banner Section with Motion */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative w-full"
      >
        <img
          src="/Banners/Terminal Management.png"
          alt="Terminal Management"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Terminal Management</h1>
        </div>
      </motion.div>

      {/* Offerings Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-white py-10">
          <div className="max-w-6xl mx-auto  shadow-lg rounded-lg p-2">
            <p className="mt-4 text-black leading-relaxed text-lg">
              With nearly 55% of containerized cargo moving into the hinterlands, the demand for efficient logistics solutions has never been greater. ICD have become essential components of the supply chain, serving as vital hubs that facilitate the smooth transfer of goods between various modes of transportation. Recognizing this need, we have established our own Inland Container Depot at Bawal.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center text-center">
          <h1 className="text-[#002D62] text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4 mt-8">Our Offerings</h1>
        </div>
        <br />

        {/* Offerings Cards */}
        <div className="space-y-10">
          {offeringsData.map((offering, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-8 flex items-center space-x-6 transform transition-transform duration-500 ${animate ? 'slide-in' : ''}`}
            >
              <div className="text-5xl text-[#002D62]">{offering.icon}</div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{offering.title}</h3>
                <p className="text-gray-900 text-lg">{offering.description}</p>
                <p className="text-gray-900 text-lg">{offering.description2}</p>
                {offering.details && (
                  <ul className="list-disc text-lg pl-5 text-gray-900 space-y-2">
                    {offering.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <Footer />

      {/* CSS for Animation */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TerminalManagement;
