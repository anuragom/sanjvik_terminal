


import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaExclamationCircle } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { motion } from "framer-motion"; // For animations
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
   <div>
     <div className="w-full min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <motion.div
        className="bg-[#0047AB] shadow-lg rounded-lg p-8 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center items-center text-white mb-4">
          <BsShieldCheck className="text-5xl animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold text-white">Terms and Conditions</h1>
        <p className="text-blue-200 mt-2">
          Please read these terms carefully before using this website.
        </p>
      </motion.div>

      {/* Terms and Conditions Sections */}
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Visitors Bound */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4 transition-all"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("bound")}>
            <h2 className="text-2xl font-semibold text-gray-800">VISITORS TO THIS WEBSITE ARE BOUND</h2>
            {openSections.bound ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.bound && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              VISITORS TO THIS WEBSITE ARE BOUND BY THE FOLLOWING TERMS AND
              CONDITIONS ("TERMS"). SO, PLEASE READ THE TERMS CAREFULLY BEFORE
              CONTINUING TO USE THIS SITE. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS,
              PLEASE DO NOT USE THIS SITE.
            </motion.p>
          )}
        </motion.div>

        {/* Section 2: General Use */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("general")}>
            <h2 className="text-2xl font-semibold text-gray-800">General Use of Website</h2>
            {openSections.general ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.general && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              The use of this website is subject to the following terms of use: The content of the pages of this website is for your general information and use only. It is subject to change without notice.
            </motion.p>
          )}
        </motion.div>

        {/* Section 3: Cookies */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("cookies")}>
            <h2 className="text-2xl font-semibold text-gray-800">Cookies Usage</h2>
            {openSections.cookies ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.cookies && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, personal information may be stored by us for use by third parties.
            </motion.p>
          )}
        </motion.div>

        {/* Section 4: User Responsibility */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("liability")}>
            <h2 className="text-2xl font-semibold text-gray-800">User Responsibility and Liability</h2>
            {openSections.liability ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.liability && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Your use of any information or materials on this website is entirely at your own risk, for which Sanjvik Terminals Pvt. Ltd. shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
            </motion.p>
          )}
        </motion.div>

        {/* Section 5: No Warranty */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("warranty")}>
            <h2 className="text-2xl font-semibold text-gray-800">No Warranty or Guarantee</h2>
            {openSections.warranty ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.warranty && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Neither Sanjvik Terminals Pvt. Ltd. nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose.
            </motion.p>
          )}
        </motion.div>

        {/* Section 6: Website Ownership */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("ownership")}>
            <h2 className="text-2xl font-semibold text-gray-800">Website Ownership and Material</h2>
            {openSections.ownership ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.ownership && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the appearance, graphics, design, layout, etc. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            </motion.p>
          )}
        </motion.div>

        {/* Section 7: Trademarks */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("trademarks")}>
            <h2 className="text-2xl font-semibold text-gray-800">Trademarks</h2>
            {openSections.trademarks ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.trademarks && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              The Trademark of Sanjvik Terminals Pvt. Ltd. and all logos denoted with “TM” or “®” are trademarks or registered trademarks of Sanjvik Terminals Pvt. Ltd. Trademarks of Sanjvik Terminals Pvt. Ltd. may not be used in connection with any product or service that is not a Sanjvik Terminals Pvt. Ltd. product, function or service.
            </motion.p>
          )}
        </motion.div>

        {/* Section 8: Unauthorized Use */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("unauthorized")}>
            <h2 className="text-2xl font-semibold text-gray-800">Unauthorized Use</h2>
            {openSections.unauthorized ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.unauthorized && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
            </motion.p>
          )}
        </motion.div>

        {/* Section 9: External Links */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("links")}>
            <h2 className="text-2xl font-semibold text-gray-800">External Links</h2>
            {openSections.links ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.links && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that Sanjvik Terminals Pvt. Ltd. endorses the website(s). Sanjvik Terminals Pvt. Ltd. has no responsibility for the content of the linked website(s).
            </motion.p>
          )}
        </motion.div>

        {/* Section 10: Applicable Law */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("law")}>
            <h2 className="text-2xl font-semibold text-gray-800">Applicable Law and Jurisdiction</h2>
            {openSections.law ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.law && (
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Applicable Law and Jurisdiction of this website are governed by and to be interpreted in accordance with the laws of India, without regard to the choice or conflicts of law provisions of any jurisdiction. The user/site visitor agrees that in the event of any dispute arising in relation to this Disclaimer or any dispute arising in relation to the website whether in contract or tort or otherwise, to submit to the jurisdiction of the courts located at Delhi only for the resolution of all such disputes.
            </motion.p>
          )}
        </motion.div>

        {/* Important Notice */}
        <motion.div
          className="bg-red-50 text-red-600 p-6 mt-6 rounded-lg flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <FaExclamationCircle className="text-3xl mr-3 animate-pulse" />
          <p className="font-semibold">
            Please ensure you read all terms carefully. If you have any doubts, seek legal counsel.
          </p>
        </motion.div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default TermsAndConditions;
