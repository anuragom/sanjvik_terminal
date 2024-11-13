


import { FaTruck, FaTrain, FaPlane, FaShip, FaRoad, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const OurFacilities = () => {
  return (
    <div>
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative w-full"
      >
        <img
          src="/Banners/sanjvik banner (1).png"
          alt="Our Facility"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Our Facility
          </h1>
        </div>
      </motion.div>

      {/* Dynamic Information Section */}
      <div className="p-6 md:p-10">
        <div className=" py-8">
          <div className="max-w-6xl mx-auto  bg-white shadow-lg rounded-lg p-4">
            <p className="mt-4 text-black leading-relaxed text-lg">
            Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity. With its prime location and well-established transportation links, the facility is designed to streamline cargo movement, ensuring fast and efficient delivery. Our robust network of road, rail, port and airport connections enhances our ability to serve as a vital hub for businesses across India, making Sanjvik Terminals a preferred choice for logistics solutions. ICD Bawal leverage its prime location with seamless connectivity directly from the highway to the terminal. One of its advantages is the absence of "No Entry" restrictions, ensuring that vehicles can move freely and without delays both when entering and exiting the terminal
            </p>
          </div>
        </div>
        <br />

        {/* Facilities Overview with Icons */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Facility 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center bg-gradient-to-r from-white to-indigo-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500 h-full"
          >
            <FaMapMarkerAlt className="text-[#00308F] text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Strategic Location</h3>
            <p className="text-gray-700">Located at the heart of India's key industrial zones...</p>
          </motion.div>

          {/* Facility 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center bg-gradient-to-r from-white to-indigo-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500 h-full"
          >
            <FaTruck className="text-[#00308F] text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Road Connectivity</h3>
            <p className="text-gray-700">Seamless connectivity with national highways allows quick transportation...</p>
          </motion.div>

          {/* Facility 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center bg-gradient-to-r from-white to-indigo-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500 h-full"
          >
            <FaTrain className="text-[#00308F] text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Rail Access</h3>
            <p className="text-gray-700">Direct rail connections enable bulk transport over long distances...</p>
          </motion.div>

          {/* Facility 4 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center bg-gradient-to-r from-white to-indigo-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500 h-full"
          >
            <FaPlane className="text-[#00308F] text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Airport Proximity</h3>
            <p className="text-gray-700">Close proximity to major airports enables rapid air freight services...</p>
          </motion.div>

          {/* Facility 5 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center bg-gradient-to-r from-white to-indigo-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500 h-full"
          >
            <FaShip className="text-[#00308F] text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Port Connectivity</h3>
            <p className="text-gray-700">Efficient port connections streamline international shipping...</p>
          </motion.div>

          {/* Facility 6 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center bg-gradient-to-r from-white to-indigo-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500 h-full"
          >
            <FaRoad className="text-[#00308F] text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">No Entry Restrictions</h3>
            <p className="text-gray-700">With no "No Entry" restrictions, vehicles can move freely...</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurFacilities;
