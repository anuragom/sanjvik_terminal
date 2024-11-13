


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For adding dynamic animations
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from '../components/Footer';

const WarehouseServicesComponent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 500); // Show after half a second

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <div className="relative">
        
        {/* <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          className="bg-cover bg-center h-[80vh] relative text-white flex items-center justify-center"
          style={{
            backgroundImage: "url('/Banners/Warehousing Banner.svg')",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }} 
            className="p-8 bg-black bg-opacity-50 max-w-3xl text-center rounded-lg shadow-lg"
          >
            <h1 className="text-5xl font-bold mb-4">WAREHOUSING</h1>
           
          </motion.div>
        </motion.div> */}

<motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative  w-full"
      >
        <img
          src="/Banners/Warehousing.jpg"
          alt="Custom Clearance"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0  opacity-30 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">Warehousing</h1>
        </div>
      </motion.div>
      <div className="bg-white py-8 ">
        <div className="max-w-6xl mx-auto  shadow-lg rounded-lg p-4">
          
          <p className="mt-4 text-black leading-relaxed text-lg">
          Sanjvik Terminals provides state-of-the-art warehousing facilities that are tailored to cater to the diverse storage needs of customers, ensuring seamless storage needs. With 31,000 sq. ft. of optimized storage space, we are fully equipped to handle both transit and domestic requirements.

          </p>
          <p className='mt-4 text-black leading-relaxed text-lg'>
          We offer an 8,000 sq. ft. bonded warehousing facility dedicated to leasing and a vast 23,000 sq. ft. domestic warehousing space for diverse storage needs. This supports businesses in managing their inventory effectively while enabling seamless logistics operations tailored to meet the demands of both international and domestic markets. Regardless of business size, we offer scalable warehousing solutions, enabling businesses to adapt to their changing storage needs. Our advanced infrastructure and customized storage solutions streamline processes to ensure quick turnaround times, keeping your supply chain agile. We tailor our services to meet the unique needs of your business with transparency and support at every step.
          </p>
        </div>
      </div>

     
        

       
        <Footer />
      </div>
    </div>
  );
};

export default WarehouseServicesComponent;
