


import React from 'react';
import { FaClipboardCheck, FaShippingFast, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For adding dynamic animations
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        {/* Who We Are Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-cover bg-center h-[60vh] relative text-white flex items-center justify-center"
          style={{
            backgroundImage: "url('/page/about.jpg')",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="p-8 bg-black bg-opacity-50 max-w-3xl text-center rounded-lg shadow-lg"
          >
            <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-lg">
              Sanjvik Terminals Pvt. Ltd. is a dry port located in Bawal, Haryana, and one of the leading Inland Container Depots (ICD) in the Northern region. Our facility connects major industrial zones, equipped with state-of-the-art infrastructure tailored to handle high volumes of containers with precision and efficiency.
            </p>
          </motion.div>
        </motion.div>

        {/* Card Section - Who We Are */}
        <div className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-8xl">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                  <FaClipboardCheck className="mr-2 text-blue-500" /> 
                  State-of-the-Art Infrastructure
                </h2>
                <p className="text-gray-700">
                  Our facility is equipped with cutting-edge infrastructure and systems, ensuring the seamless movement of cargo and its timely delivery. We handle high volumes of containers with precision, using technology-driven processes to optimize efficiency.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                  <FaShippingFast className="mr-2 text-blue-500" /> 
                  Integrated Management Systems
                </h2>
                <p className="text-gray-700">
                  Our integrated management systems are continuously monitored and upgraded to align with the latest industry innovations. This ensures minimal delays, secure handling, and timely delivery of goods, meeting the growing demands of the global supply chain.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                  <FaCogs className="mr-2 text-blue-500" /> 
                  Trusted Logistics Partner
                </h2>
                <p className="text-gray-700">
                  Our highly trained staff and cutting-edge technology work together to ensure smooth and uninterrupted service. We are a trusted partner in the logistics landscape, delivering optimal safety, swift processing, and reliable service at every step.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-8xl">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                  <FaClipboardCheck className="mr-2 text-blue-500" /> 
                  Our History
                </h2>
                <p className="text-gray-700">
                  Sanjvik Terminals Pvt. Ltd. was incorporated in 2007 with the primary objective of developing and operating an Inland Container Depot (ICD) in Bawal. In 2024, the company was acquired by Om Logistics Ltd., a premier company in the Indian logistics and supply chain management industry.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                  <FaShippingFast className="mr-2 text-blue-500" /> 
                  Strategic Location & Connectivity
                </h2>
                <p className="text-gray-700">
                  Strategically located, the terminal has been designed to facilitate efficient movement and storage of both domestic and EXIM cargo. With proximity to key industrial zones and major highways, we offer excellent connectivity to ports and airports across the country.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                  <FaCogs className="mr-2 text-blue-500" /> 
                  Advanced Infrastructure & Systems
                </h2>
                <p className="text-gray-700">
                  The ICD is fully equipped to handle containers with integrated management systems that ensure seamless operations and timely delivery. These systems are continuously monitored and upgraded, enabling us to adapt to the evolving demands of global trade and logistics.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                  <FaClipboardCheck className="mr-2 text-blue-500" /> 
                  Commitment to Innovation & Excellence
                </h2>
                <p className="text-gray-700">
                  Our commitment to innovation, safety, and excellence ensures that we remain a trusted partner in the logistics landscape. We deliver customized solutions, adapting to the changing global trade dynamics while maintaining high standards of safety and service efficiency.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default AboutUs;
