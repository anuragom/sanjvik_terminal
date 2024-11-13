// components/ScrollToTop.js
import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa'; // Importing a home icon

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#002D62',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          padding: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E65C5C')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E65C5C')}
      >
        <FaHome />
      </button>
    )
  );
};

export default ScrollToTop;
