

import React from 'react';
import { FaShippingFast, FaGlobe, FaTruck } from 'react-icons/fa'; // React icons

const VisionNew = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[75vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/page/vission.png')" }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg p-6 max-w-4xl w-full text-center shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00308F]">Our Vision</h1>
        <p className="text-md md:text-lg text-gray-1000 mb-6">
          Sanjvik Terminals envisions becoming a leading inland logistics hub, offering seamless solutions that drive economic growth and connectivity. Through continuous innovation and dedication to excellence, we envision a future where it serves as a pivotal hub, empowering global and domestic trade with innovative logistics solutions and sustainable practices.
        </p>

        {/* Icon Section */}
        <div className="flex justify-around items-center mt-6">
          <VisionCard icon={<FaShippingFast size={40} />} title="Fast Shipping" />
          <VisionCard icon={<FaGlobe size={40} />} title="Global Reach" />
          <VisionCard icon={<FaTruck size={40} />} title="Efficient Logistics" />
        </div>
      </div>
    </div>
  );
};

// Vision Card Component
const VisionCard = ({ icon, title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
      {icon}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">{title}</h2>
    </div>
  );
};

export default VisionNew;
