

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const CompanySection = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageVisible(true);
    }, 1000); // Delay of 1.5 seconds for a smoother effect

    return () => clearTimeout(timer);
  }, []);

  // Function to handle button click and redirect to /about page
  const handleRedirect = () => {
    navigate("/about"); // Programmatically navigate to the /about page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-alice-blue p-6 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-800 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side Text */}
        <div className="text-left space-y-6 md:flex md:flex-col md:justify-center">
          <h2 className="text-[#002D62] text-3xl md:text-5xl uppercase font-extrabold tracking-wide">
            Who We Are
          </h2>

          <p className="text-black text-lg max-w-lg leading-relaxed">
          Sanjvik Terminals Pvt. Ltd., a group company of Om Logistics Limited, operates as a premier dry port in Bawal, Haryana. It is one of the leading Inland Container Depots (ICD) in the country's northern region. The facility serves as a vital hinterland hub, seamlessly connecting major industrial zones. We are equipped with state-of-the-art infrastructure tailored to handle high volumes of containers with precision. Our integrated management systems ensure seamless handling, from the efficient movement of cargo to its timely delivery.
          </p>
          <p className="text-black text-lg max-w-lg leading-relaxed">
          These integrated systems are continuously monitored and upgraded to
            align with industry innovations and meet the growing demands of the
            global supply chain. With a focus on minimizing delays and
            optimizing safety, our facility is engineered to provide swift
            processing and secure handling of all goods. Our highly trained
            staff and cutting-edge technology work align to deliver smooth and
            uninterrupted service, making us a trusted partner in the logistics
            landscape.
          </p>

          {/* Button */}
          <button
            className="bg-[#002D62] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-black transition-transform transform hover:scale-105"
            onClick={handleRedirect}
          >
            Company Overview
          </button>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center md:justify-end items-center">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
            <img
              src="/Banners/Who we are.png"
              alt="Sanjvik Terminals"
              className={`w-full h-[80vh] rounded-xl shadow-2xl ml-20 transform transition-transform duration-1000 ${
                isImageVisible ? "scale-100" : "scale-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style>{`
        /* Add smooth scale-in effect for the image */
        .scale-0 {
          transform: scale(0);
        }
        .scale-100 {
          transform: scale(1);
        }
      `}</style>
    </div>
  );
};

export default CompanySection;


// import React from 'react';

// const CompanySection = () => {
//   return (
//     <div className="bg-alice-blue p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Facility</h1>
//       <p className="text-gray-700 mb-4">
//         Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial
//         areas, offering exceptional connectivity. With its prime location and well-established
//         transportation links, the facility is designed to streamline cargo movement, ensuring fast
//         and efficient delivery.
//       </p>
//       <p className="text-gray-700 mb-4">
//         Our robust network of road, rail, port, and airport connections enhances our ability to
//         serve as a vital hub for businesses across India, making Sanjvik Terminals a preferred
//         choice for logistics solutions.
//       </p>
//       <p className="text-gray-700">
//         ICD Bawal leverages its prime location with seamless connectivity directly from the highway
//         to the terminal. One of its advantages is the absence of "No Entry" restrictions, ensuring
//         that vehicles can move freely and without delays both when entering and exiting the terminal.
//       </p>
//     </div>
//   );
// };

// export default CompanySection;
