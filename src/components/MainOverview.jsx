


import React from 'react';
import { FaShieldAlt, FaUsers, FaHandHoldingHeart, FaLeaf, FaGem, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from './Footer';

const MainOverviews = () => {
  const values = [
    { icon: FaShieldAlt, title: 'Safety', description: 'Ensuring the highest standards of safety and security in all operations to protect our people, assets, and cargo.' },
    { icon: FaUsers, title: 'Customer-Centric Approach', description: 'Prioritizing customer needs by offering tailored, reliable solutions that simplify logistics operations.' },
    { icon: FaHandHoldingHeart, title: 'Integrity', description: 'Conducting business with transparency, honesty, and accountability at every level.' },
    { icon: FaGem, title: 'Quality', description: 'ISO-certified provider offering services that exceed customer expectations.' },
    { icon: FaLeaf, title: 'Sustainability', description: 'Committed to environmentally responsible practices that reduce our impact on the planet.' },
    { icon: FaRegStar, title: 'Excellence', description: 'Striving for operational excellence through continuous improvement and advanced technologies.' },
    { icon: FaShieldAlt, title: 'Collaboration', description: 'Working together with partners, employees and stakeholders to nurture mutual growth and success.' } // Moved to the end
  ];

  return (
    <div>
      <div className=" py-12">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative  w-full"
        >
          <img
            src="/Banners/Mission Vision.png"
            alt="Custom Clearance"
            className="w-full h-[80vh] object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
        </motion.div>

        {/* Vision Section */}
        <div className=" py-8">
          <div className="flex items-center justify-center text-center">
            <h1 className="text-[#002D62] text-4xl md:text-5xl font-bold drop-shadow-lg mb-4 mt-8"> Our Vision</h1>
          </div>
          <div className="max-w-6xl mx-auto  bg-white shadow-lg rounded-lg p-4">
            <p className="mt-4 text-black leading-relaxed text-lg">
              Sanjvik Terminals envisions becoming a leading inland logistics hub, offering seamless solutions that drive economic growth and connectivity. Through continuous innovation and dedication to excellence, we envision a future where it serves as a pivotal hub, empowering global and domestic trade with innovative logistics solutions and sustainable practices.
            </p>
          </div>
        </div>

        <br />

        {/* Mission Section */}
        <div className="bg-white py-8">
          <div className="flex items-center justify-center text-center">
            <h1 className="text-[#002D62] text-4xl md:text-5xl font-bold drop-shadow-lg mb-4 mt-8"> Our Mission</h1>
          </div>
          <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4">
            <p className="mt-4 text-black leading-relaxed text-lg">
              At Sanjvik Terminals, we are driven by a mission to enhance the efficiency of logistics operations in India by providing reliable, scalable and innovative solutions. We aim to support the country’s economic growth by ensuring businesses and industries can transport their goods seamlessly to their intended destinations.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mb-16 ">
          <h2 className="text-[#002D62] text-5xl font-bold text-center mb-12">Our Values</h2>

          <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4">
            <p className="mt-4 text-black leading-relaxed text-lg">
              Our core values shape the foundation of everything we do. These principles guide our actions, influence our decisions and reflect our commitment to delivering excellence in our services. With this, we ensure that our operations are not only efficient but also ethical, customer-focused and sustainable
            </p>
          </div>
          <br />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={` shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500 flex flex-col justify-center items-center ${index === values.length - 1 ? 'col-span-full' : ''}`} // Center the last item
              >
                {/* Icon Centered */}
                <value.icon className="text-indigo-600 text-6xl mb-4" />
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainOverviews;
