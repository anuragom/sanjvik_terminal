

import React from 'react';
import { FaTruckLoading, FaIndustry, FaRoute } from 'react-icons/fa'; // React icons

const Mission = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/page/mission.png')" }} // Use the correct path for your image
    >
      <div className="bg-white bg-opacity-80 rounded-lg p-6 max-w-4xl w-full text-center shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00308F]">Our Mission</h1>
        <p className="text-md md:text-lg text-gray-700 mb-6">
          At Sanjvik Terminals, we are driven by a mission to enhance the efficiency of logistics operations in India by providing reliable, scalable, and innovative solutions. We aim to support the country's economic growth by ensuring businesses and industries can transport their goods seamlessly to their intended destinations.
        </p>

        {/* Icon Section */}
        <div className="flex justify-around items-center mt-6">
          <MissionCard icon={<FaTruckLoading size={40} />} title="Efficient Operations" />
          <MissionCard icon={<FaIndustry size={40} />} title="Supporting Industries" />
          <MissionCard icon={<FaRoute size={40} />} title="Seamless Logistics" />
        </div>
      </div>
    </div>
  );
};

// Mission Card Component
const MissionCard = ({ icon, title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
      {icon}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">{title}</h2>
    </div>
  );
};

export default Mission;
