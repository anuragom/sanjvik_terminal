


import React from 'react';
import { FaClipboardCheck, FaShippingFast, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For adding dynamic animations
import Footer from '../components/Footer';

const CustomClearance = () => {
  return (
   <div>
     <div className="relative">
     
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative  w-full"
      >
        <img
          src="/Banners/Custom Clearance - Banner.svg"
          alt="Custom Clearance"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0  opacity-30 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">Custom Clearance</h1>
        </div>
      </motion.div>
      <div className=" py-8 ">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4">
          
          <p className="mt-4 text-black leading-relaxed text-lg">
          Our customs clearance service at Sanjvik ensures a smooth and efficient process for managing the complex requirements of national and international trade. We provide expert assistance with all aspects of customs documentation and regulatory compliance, helping you navigate through the intricate procedures of import and export. Our dedicated team of professionals is well-versed in customs regulations and works diligently to facilitate the swift and accurate clearance of your shipments. By handling the necessary paperwork, tariff classifications and duty calculations, we minimize process time and ensure that your goods move seamlessly across borders. Our comprehensive customs clearance service is designed to simplify your logistics operations, allowing you to focus on your core business while we manage the regulatory details.

          </p>
          <p className='mt-4 text-black leading-relaxed text-lf'>
          We utilize the advanced Risk Management System (RMS) to provide a seamless and highly efficient approach to customs clearance. This system operates like a green channel, enabling faster processing and reducing delays in clearing your goods. With RMS, we streamline the entire customs process, ensuring that your shipments are cleared swiftly and with minimal hassle. To further enhance our service, we facilitate the setup of an Authorized Economic Operator (AEO) office, which functions as a mini customs office, managing all customs procedures through an integrated system. We offer a comprehensive solution that accelerates your supply chain operations while maintaining full compliance with regulatory requirements.
          </p>
        </div>
      </div>

      
    
    </div>
    <Footer/>
   </div>
  );
};

export default CustomClearance;
