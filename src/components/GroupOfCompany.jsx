


import React, { useState, useEffect } from 'react';

// Company logos, names, and URLs
const companies = [
  { name: 'Om Infra Constructions', logo: '/groupOfcompanys/Om infra.png', url: 'https://www.ominfra.com' },
  { name: 'Om Logistics Limited', logo: '/groupOfcompanys/Om Logo-2.png', url: 'https://omlogistics.co.in/' },
  { name: 'Om Trans', logo: '/groupOfcompanys/Om Trans.png', url: 'https://www.omtrans.in/' },
  { name: 'Om X Info', logo: '/groupOfcompanys/omxinfo logo.png', url: 'https://omxinfo.co.in/' },
  { name: 'Om Telecom', logo: '/groupOfcompanys/Telecom.jpg', url: 'https://www.omtelecom.co.in/' },
  { name: 'TGL', logo: '/groupOfcompanys/TGL logo - file.png', url: 'https://tran-safe.com/' },
  { name: 'Transafe Services', logo: '/groupOfcompanys/Transafe.png', url: 'https://transafeservices.com/' },
  { name: 'Om Trax', logo: '/groupOfcompanys/trax_logo_new.png', url: 'https://www.omtrax.com/' },
];

const OurCompany = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track if slider is paused
  const slidesToShow = 4; // Number of slides to show at once
  const autoScrollInterval = 1300; // Auto scroll every 1.3 seconds

  // Auto-scroll slider logic
  useEffect(() => {
    if (!isPaused) {
      const autoScroll = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + slidesToShow >= companies.length ? 0 : prevIndex + 1
        );
      }, autoScrollInterval);

      // Clear interval when component unmounts or slider is paused
      return () => clearInterval(autoScroll);
    }
  }, [isPaused]);

  // Handling manual slide navigation
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= companies.length ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? companies.length - slidesToShow : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto py-10 overflow-hidden relative">
      <h2 className="text-5xl text-[#002D62] font-bold text-center mb-8">
        Our Group of Companies
      </h2>

      {/* Slider Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll when hovered
        onMouseLeave={() => setIsPaused(false)} // Resume auto-scroll when mouse leaves
      >
        {/* Arrow Buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-800 text-5xl p-2 rounded-full z-10 hover:bg-gray-600"
        >
          &#8249; {/* Left arrow symbol */}
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 text-5xl p-2 rounded-full z-10 hover:bg-gray-600"
        >
          &#8250; {/* Right arrow symbol */}
        </button>

        {/* Slider Items */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex % companies.length) * 25}%)` }}
        >
          {companies.map((company, index) => (
            <div key={index} className="w-1/4 p-4 flex-shrink-0">
              <a href={company.url} target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 h-40 w-40">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-full object-contain mb-4"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
