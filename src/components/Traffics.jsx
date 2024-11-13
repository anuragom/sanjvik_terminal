import React from 'react';
import { FaFilePdf } from 'react-icons/fa'; // Importing a PDF icon from React Icons
import Footer from './Footer';

const Traffic = () => {
  const openPDF = () => {
    // Assuming you have a PDF hosted at this path
    window.open('/pdf/ICD Bawal Tariff - STPL.pdf');
  };

  return (
    
    <div>
      <div className="bg-[#00308F] text-white p-6 flex flex-col items-center justify-center h-screen overflow-hidden">
      <h1 className="text-3xl font-bold mb-4">Traffic Overview</h1>
      <p className="mb-6">Sanjvik Terminal Pvt. Ltd.</p>
      <button 
        onClick={openPDF} 
        className="flex items-center bg-white text-[#00308F] p-3 rounded-md hover:bg-gray-200 transition"
      >
        <FaFilePdf className="mr-2" /> Open Traffic Report (PDF)
      </button>
    </div>
    <Footer/>
    </div>
  );
};

export default Traffic;
