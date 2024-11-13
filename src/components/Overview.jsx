


import React, { useState, useEffect, useRef } from 'react';
import { FaTruck, FaTrain, FaPlane, FaShip, FaBuilding, FaMapMarked, FaNetworkWired } from 'react-icons/fa';

const OurFacility = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ismodelOpen, setIsmodelOpen] = useState(false);
  const [currentFacility, setCurrentFacility] = useState(null);
  const scrollContainerRef = useRef(null);
  const autoSlideIntervalRef = useRef(null); // To store the interval reference

  const facilities = [
    {
      icon: <FaBuilding className="text-[#00308F] text-5xl mb-4" />,
      title: "Strategic Location",
      description: "Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity.",
      image: "/landingPage/landing1.png",
      detail: "Located at the heart of India's industrial hubs, our facility ensures easy access to key markets, suppliers, and transport infrastructure, optimizing logistics and reducing transit times."
    },
    {
      icon: <FaMapMarked className="text-[#00308F] text-5xl mb-4" />,
      title: "Streamlined Cargo Movement",
      description: "Our facility is designed to streamline cargo movement, ensuring fast and efficient delivery.",
      image: "/landingPage/vision.jpg",
      detail: "Our streamlined cargo movement system reduces handling times and increases efficiency, enabling faster turnarounds and lower operational costs."
    },
    {
      icon: <FaNetworkWired className="text-[#00308F] text-5xl mb-4" />,
      title: "Robust Transportation Network",
      description: "Our robust network of road, rail, port, and airport connections enhances our ability to serve as a vital hub for businesses across India.",
      image: "/landingPage/landing3.png",
      detail: "Our integrated network offers seamless transitions between different modes of transport, ensuring uninterrupted movement of goods across the country."
    },
    {
      icon: <FaTruck className="text-[#00308F] text-5xl mb-4" />,
      title: "Road Connectivity",
      description: "ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal.",
      image: "/landingPage/landing4.png",
      detail: "Our direct access to national highways enables quick and easy transport, minimizing delays and reducing transport costs."
    },
    {
      icon: <FaTrain className="text-[#00308F] text-5xl mb-4" />,
      title: "Rail Access",
      description: "Our facility is strategically linked to rail networks for efficient cargo transport.",
      image: "/landingPage/landing5.png",
      detail: "Our rail connectivity allows for bulk cargo transport over long distances, reducing costs and providing a reliable transport solution."
    },
    {
      icon: <FaPlane className="text-[#00308F] text-5xl mb-4" />,
      title: "Airport Proximity",
      description: "Close proximity to major airports ensures rapid air freight services.",
      image: "/landingPage/port.jpg",
      detail: "With major airports nearby, we can offer expedited air freight services, making it ideal for time-sensitive shipments."
    },
    {
      icon: <FaShip className="text-[#00308F] text-5xl mb-4" />,
      title: "Port Connectivity",
      description: "Our port connections enhance our logistics capabilities for international shipping.",
      image: "/landingPage/truck-1.jpg",
      detail: "Our access to major ports facilitates international trade, providing a cost-effective and efficient solution for global shipping."
    }
  ];

  const handleCardClick = (facility) => {
    setCurrentFacility(facility);
    setIsmodelOpen(true);
  };

  const handleClosemodel = () => {
    setIsmodelOpen(false);
  };

  const scrollToIndex = (index) => {
    const scrollAmount = index * 300; // Adjust 300 to card width if necessary
    scrollContainerRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
    }, 3000); // Adjust time for auto-slide interval
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideIntervalRef.current);
  };

  useEffect(() => {
    startAutoSlide(); // Start automatic sliding on mount

    return () => stopAutoSlide(); // Cleanup interval on component unmount
  }, [facilities.length]);

  useEffect(() => {
    scrollToIndex(currentIndex); // Scroll to the current index
  }, [currentIndex]);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? facilities.length - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
  };

  return (
    <section className="bg-white py-10 relative animate-section-entry">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#00308F] text-center mb-6 animate-title-entry">Our Facility</h2>
        
        <div 
          className="relative"
          onMouseEnter={stopAutoSlide} // Stop sliding on hover
          onMouseLeave={startAutoSlide} // Resume sliding on mouse leave
        >
          {/* Scroll buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white rounded-full p-2 z-10"
          >
            &#8249;
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white rounded-full p-2 z-10"
          >
            &#8250;
          </button>

          <div 
            ref={scrollContainerRef} 
            className="flex space-x-6 overflow-x-hidden py-6 custom-scrollbar"
          >
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className={`bg-gray-100 p-6 rounded-lg shadow transition-transform transform hover:scale-105 flex-shrink-0 w-72 cursor-pointer`}
                
              >
                {facility.icon}
                <h3 className="text-xl font-semibold mt-4">{facility.title}</h3>
                <p className="text-gray-700 mt-2">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {ismodelOpen && currentFacility && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 model-fade-in">
            <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-1/2 lg:w-1/3 shadow-lg animate-model-entry">
              <div className="flex justify-end p-1">
                <button className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
              </div>
              <div className="p-6 text-center">
                <img src={currentFacility.image} alt={currentFacility.title} className="w-full mb-4 rounded-lg" />
                <h3 className="text-2xl font-semibold mb-2">{currentFacility.title}</h3>
                <p className="text-gray-700 mb-4">{currentFacility.detail}</p>
                <button onClick={handleClosemodel} className="bg-[#002D62] text-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #f97316; /* Orange color for the scroll thumb */
          border-radius: 10px;
        }
        .model-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-section-entry {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-title-entry {
          animation: slideLeft 0.8s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-card-entry {
          animation: cardEntry 0.5s ease-out forwards;
        }
        @keyframes cardEntry {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-model-entry {
          animation: modelEntry 0.5s ease-out forwards;
        }
        @keyframes modelEntry {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default OurFacility;


// import React from 'react'

// export default function OurFacility() {
//   return (
//     <div className="bg-indigo-100 py-8">
//       <h1 className="text-5xl font-bold text-[#002D62] mb-8 text-center">Our Facility</h1>
//     <div className="max-w-6xl mx-auto  bg-alice-blue shadow-lg rounded-lg p-4">
//       <p className="mt-4 text-black leading-relaxed text-lg">
//       Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas,
// offering exceptional connectivity. With its prime location and well-established transportation links,
// the facility is designed to streamline cargo movement, ensuring fast and efficient delivery. Our robust
// network of road, rail, port and airport connections enhances our ability to serve as a vital hub for
// businesses across India, making Sanjvik Terminals a preferred choice for logistics solutions. ICD Bawal
// leverage its prime location with seamless connectivity directly from the highway to the terminal. One
// of its advantages is the absence of "No Entry" restrictions, ensuring that vehicles can move freely and
// without delays both when entering and exiting the terminal.

//       </p>
//     </div>
//   </div>
//   )
// }
