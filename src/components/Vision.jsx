


import React from 'react';
import { FaShieldAlt, FaUserTie, FaCheckCircle, FaLeaf, FaHandsHelping, FaGem } from 'react-icons/fa';

const SanjvikOverview = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center mb-12 animate-fade-in">
        <img
          src="./Banners/vision.jpg"
          alt="Vision"
          className="w-full md:w-1/2 h-auto mb-6 md:mb-0 md:mr-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
        />
        <div className="transition-opacity duration-700 ease-in-out md:w-1/2">
          <h2 className="text-4xl font-bold text-[#00308F] mb-4 hover:text-orange-800 transition-colors duration-300">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Sanjvik Terminals envisions becoming a leading inland logistics hub, offering seamless solutions 
            that drive economic growth and connectivity. Through continuous innovation and dedication to 
            excellence, we envision a future where it serves as a pivotal hub, empowering global and domestic 
            trade with innovative logistics solutions and sustainable practices.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-12 animate-fade-in">
        <img
          src="./landingPage/mission.jpg"
          alt="Mission"
          className="w-full md:w-1/2 h-auto mb-6 md:mb-0 md:ml-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
        />
        <div className="transition-opacity duration-700 ease-in-out md:w-1/2">
          <h2 className="text-4xl font-bold text-[#00308F] mb-4 hover:text-orange-800 transition-colors duration-300">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Sanjvik Terminals, we are driven by a mission to enhance the efficiency of logistics operations 
            in India by providing reliable, scalable, and innovative solutions. We aim to support the country's 
            economic growth by ensuring businesses and industries can transport their goods seamlessly to their 
            intended destinations.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-cover bg-center py-12 mb-12" style={{ backgroundImage: "url('./landingPage/business.jpg')" }}>
        <h2 className="text-5xl font-bold text-white mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Structure for Each Value */}
          {/* Safety */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaShieldAlt className="text-4xl text-[#00308F] transition-transform duration-300 transform hover:scale-125" />
              <h3 className="text-xl font-semibold text-[#00308F] hover:text-orange-800 transition-colors duration-300">Safety</h3>
            </div>
            <p className="text-gray-700">
              Ensuring the highest standards of safety and security in all operations to protect our people, assets, and cargo.
            </p>
          </div>

          {/* Customer-Centric Approach */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaUserTie className="text-4xl text-[#00308F] transition-transform duration-300 transform hover:scale-125" />
              <h3 className="text-xl font-semibold text-[#00308F] hover:text-orange-800 transition-colors duration-300">Customer-Centric Approach</h3>
            </div>
            <p className="text-gray-700">
              Prioritizing customer needs by offering tailored, reliable solutions that simplify logistics operations.
            </p>
          </div>

          {/* Integrity */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaCheckCircle className="text-4xl text-[#00308F] transition-transform duration-300 transform hover:scale-125" />
              <h3 className="text-xl font-semibold text-[#00308F] hover:text-orange-800 transition-colors duration-300">Integrity</h3>
            </div>
            <p className="text-gray-700">
              Conducting business with transparency, honesty, and accountability at every level.
            </p>
          </div>

          {/* Excellence */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaGem className="text-4xl text-[#00308F] transition-transform duration-300 transform hover:scale-125" />
              <h3 className="text-xl font-semibold text-[#00308F] hover:text-orange-800 transition-colors duration-300">Excellence</h3>
            </div>
            <p className="text-gray-700">
              Striving for operational excellence through continuous improvement and adoption of advanced technologies.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaLeaf className="text-4xl text-[#00308F] transition-transform duration-300 transform hover:scale-125" />
              <h3 className="text-xl font-semibold text-[#00308F] hover:text-orange-800 transition-colors duration-300">Sustainability</h3>
            </div>
            <p className="text-gray-700">
              Committed to environmentally responsible practices that reduce our impact on the planet.
            </p>
          </div>

          {/* Collaboration */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaHandsHelping className="text-4xl text-[#00308F] transition-transform duration-300 transform hover:scale-125" />
              <h3 className="text-xl font-semibold text-[#00308F] hover:text-orange-800 transition-colors duration-300">Collaboration</h3>
            </div>
            <p className="text-gray-700">
              Working together with partners, employees, and stakeholders to nurture mutual growth and success.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default SanjvikOverview;
