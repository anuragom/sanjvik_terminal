


import React from 'react';
import { FaRoad, FaShip, FaTrain, FaTruck, FaHeadset, FaWarehouse, FaLink, FaCalendarAlt, FaBoxes } from 'react-icons/fa';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const MultimodelTransport = () => {
  const offerings = [
    { icon: <FaRoad />, title: "Optimized Transit Toutes", description: "Ensure efficient routing for timely deliveries." },
    { icon: <FaShip />, title: "Linkage with FOIS", description: "Transparency through linkage with Freight Operations Information System." },
    { icon: <FaTrain />, title: "Cross-model Expertise", description: "Expertise across various transport modes for optimal solutions." },
    { icon: <FaTruck />, title: "Flexible Scheduling", description: "Adjustable schedules to meet diverse customer needs." },
    { icon: <FaWarehouse />, title: "Enhanced Infrastructure Utilization", description: "Maximize asset usage to improve efficiency." },
    { icon: <FaBoxes />, title: "Dynamic Load Management", description: "Adapting load strategies to meet demand fluctuations." },
    { icon: <FaLink />, title: "Comprehensive Logistics Integration", description: "Seamless integration for streamlined logistics processes." },
    { icon: <FaCalendarAlt />, title: "Efficient Intermodal Hubs", description: "Optimizing connections between different transport modes." },
    { icon: <FaBoxes />, title: "Customized Freight Solutions", description: "Tailored freight solutions for unique customer requirements." },
    // Move "Dedicated Customer Support" to the last position
    { icon: <FaHeadset />, title: "Dedicated Customer Support", description: "Providing 24/7 personalized assistance to ensure all your queries are resolved swiftly and efficiently." },
  ];

  return (
    <div className="bg-gray-50 py-10">
      {/* Banner Section with Overlay Text */}
      {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative mb-12 w-full"
      >
        <img
          src="/Banners/Multi Modal.png"
          alt="Multimodal Transportation"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">Multi-Modal Transportation</h1>
        </div>
      </motion.div> */}
      <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="relative mb-12 w-full"
>
  <img
    src="/Banners/Multi Modal.png"
    alt="Multimodal Transportation"
    className="w-full h-[80vh] object-cover object-bottom" // Focuses on the bottom part of the image
  />
  <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
  <div className="absolute inset-0 flex items-center justify-center text-center">
    <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">Multi-Modal Transportation</h1>
  </div>
</motion.div>

      {/* Modified Paragraph Section with Full Width */}
      <div className="bg-white py-10">
        {/* <div className=" p-2">
          <p className="mt-4 text-black leading-relaxed text-lg">
            At Sanjvik Terminals, we specialize in offering comprehensive multi-modal transportation solutions, seamlessly integrating road, rail and sea transport to meet the unique needs of our customers. This integrated approach allows us to offer flexible and cost-effective solutions that optimize logistics operations. Our strategic location and advanced infrastructure enable us to ensure smooth transitions between different modes of transport. One of the key advantages of our multi-modal transportation service is our ability to provide seamless first-mile and last-mile connectivity.
          </p>
        </div> */}
        <div className="bg-white py-10">
          <div className="max-w-6xl mx-auto  shadow-lg rounded-lg p-2">
            <p className="mt-4 text-black leading-relaxed text-lg">
            At Sanjvik Terminals, we specialize in offering comprehensive multi-modal transportation solutions, seamlessly integrating road, rail and sea transport to meet the unique needs of our customers. This integrated approach allows us to offer flexible and cost-effective solutions that optimize logistics operations. Our strategic location and advanced infrastructure enable us to ensure smooth transitions between different modes of transport. One of the key advantages of our multi-modal transportation service is our ability to provide seamless first-mile and last-mile connectivity.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center text-center">
        <h1 className="text-[#002D62] text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4 mt-8">Our Offerings</h1>
      </div>
      <br />

      {/* Offerings Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {offerings.map((offering, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            // Conditional styling to center "Dedicated Customer Support"
            className={`flex flex-col items-center bg-gradient-to-r from-white to-indigo-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500 h-full ${
              index === offerings.length - 1 ? 'lg:col-span-3' : '' // Span full width on large screens
            }`}
          >
            <div className="text-indigo-600 text-6xl mb-4 flex-shrink-0">
              {offering.icon}
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">{offering.title}</h3>
            <p className="text-gray-600 leading-relaxed">{offering.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Section */}
      <br />
      <Footer />
    </div>
  );
};

export default MultimodelTransport;
