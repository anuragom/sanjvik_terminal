


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOverviewDropdownOpen, setOverviewDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isTariffsDropdownOpen, setTariffsDropdownOpen] = useState(false); // New state for tariffs dropdown
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (setDropdownOpen) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout); // Clear any pending dropdown close timeouts
    }
    setDropdownOpen(true); // Open dropdown immediately
  };

  const handleMouseLeave = (setDropdownOpen) => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false); // Close dropdown after delay
    }, 100); // 50ms delay before closing the dropdown

    setDropdownTimeout(timeout); // Store the timeout so we can clear it later if needed
  };

  const linkClasses = `font-semibold transition-colors ${
    scrollPosition > 0 ? 'text-white' : 'text-black'
  }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrollPosition > 0 ? 'bg-[#002D62]' : 'bg-white'
      }`}
    >
      {/* Top Bar */}
      <section className='bg-gray-700 py-2'>
        <div className='container mx-auto flex justify-between'>
          <div className="flex items-start space-x-2">
            {/* <span className="text-sm font-bold text-white">SANJVIK TERMINAL PVT.LTD</span> */}
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white">
              <AiOutlineMail className="text-base" />
              <span className="text-base">tm@sanjvik.com</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <AiOutlinePhone className="text-base" />
              <span className="text-base">844-811-4803</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header */}
      <div className='container mx-auto flex justify-between items-center py-1.5'>
        <Link to="/">
          <img src="/Banners/sanjvik logo.png" alt="logo" className='w-30 h-14 bg-white p-2 rounded-sm' />
        </Link>

        <nav className='hidden lg:flex space-x-8 text-lg'>
          {/* Overview */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setOverviewDropdownOpen)}
            onMouseLeave={() => handleMouseLeave(setOverviewDropdownOpen)}
          >
            <Link to="#" className={linkClasses}>
              Overview
            </Link>
            {/* Dropdown for Overview */}
            {isOverviewDropdownOpen && (
              <div
                className="absolute left-0 mt-3 w-48 bg-white rounded-md text-black shadow-lg"
                onMouseEnter={() => handleMouseEnter(setOverviewDropdownOpen)}
                onMouseLeave={() => handleMouseLeave(setOverviewDropdownOpen)}
              >
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">About Us</Link>
                <Link to="/facility" className="block px-4 py-2 hover:bg-gray-200">Our Facility</Link>
                <Link to="/vision-mission-value" className="block px-4 py-2 hover:bg-gray-200">Mission, Vision & Value</Link>
              </div>
            )}
          </div>

          {/* Our Services */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setServicesDropdownOpen)}
            onMouseLeave={() => handleMouseLeave(setServicesDropdownOpen)}
          >
            <Link to="#" className={linkClasses}>
               Services
            </Link>
            {/* Dropdown for Services */}
            {isServicesDropdownOpen && (
              <div
                className="absolute left-0 mt-3 w-64 bg-white rounded-md text-black shadow-lg"
                onMouseEnter={() => handleMouseEnter(setServicesDropdownOpen)}
                onMouseLeave={() => handleMouseLeave(setServicesDropdownOpen)}
              >
                <Link to="/multi-modal-transportation" className="block px-4 py-2 hover:bg-gray-200">
                  Multi modal Transportation
                </Link>
                <Link to="/terminal-management" className="block px-4 py-2 hover:bg-gray-200">
                  Terminal Management
                </Link>
                <Link to="/custom-clearance-" className="block px-4 py-2 hover:bg-gray-200">
                  Custom Clearance
                </Link>
                <Link to="/warehouse" className="block px-4 py-2 hover:bg-gray-200">Warehousing</Link>
              </div>
            )}
          </div>

          {/* Tariffs with dropdown for download */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setTariffsDropdownOpen)}
            onMouseLeave={() => handleMouseLeave(setTariffsDropdownOpen)}
          >
            <Link to="#" className={linkClasses}>
              Tariffs
            </Link>
            {/* Dropdown for Tariffs */}
            {isTariffsDropdownOpen && (
              <div
                className="absolute left-0 mt-6 w-48 bg-white rounded-md text-black "
                onMouseEnter={() => handleMouseEnter(setTariffsDropdownOpen)}
                onMouseLeave={() => handleMouseLeave(setTariffsDropdownOpen)}
              >
                <a
                  href="/pdf/ICD Bawal Tariff - STPL (2) (1).pdf"
                  download="tariff.pdf"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Download Tariffs
                </a>
              </div>
            )}
          </div>

          {/* Policy -> Redirect to /environmental-policy */}
          <Link to="/environmental-policy" className={linkClasses}>Environmental Policy</Link>

          {/* Media -> Redirect to /media-releases */}
          <Link to="/blogs" className={linkClasses}>Blogs</Link>

          {/* Careers */}
          <Link to="/careers" className={linkClasses}>Careers</Link>

          {/* Contact -> Redirect to /contact-us */}
          <Link to="/contact-us" className={linkClasses}>Contact</Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className='lg:hidden'>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars className="w-8 h-8 text-black" />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50'>
          <div className='w-64 h-full bg-gray-800 p-6'>
            <button className='absolute top-4 right-4 text-white' onClick={() => setSidebarOpen(false)}>
              <FaTimes className="w-6 h-6" />
            </button>
            <nav className='mt-10 space-y-4'>
              {[
                { name: "Home", link: "/" },
                { name: "Overview", link: "/overview" },
                { name: "Services", link: "/services" },
                { name: "Tariffs", link: "/tariffs-overview" },
                { name: "Policy", link: "/environmental-policy" },
                { name: "Media", link: "/media-releases" },
                { name: "Careers", link: "/careers" },
                { name: "Contact", link: "/contact-us" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className='block text-lg text-white hover:text-gray-400'
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
