import React from 'react';
import { motion } from 'framer-motion';

const Blog1 = () => {
  return (
    <div className="bg-gray-50 py-10">
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative w-full mb-8"
      >
        <img
          src="/Banners/Blog 1.jpeg" 
          alt="The Role of Inland Container Depot"
          className="w-full h-[80vh] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            The Role of Inland Container Depot (ICD) in Streamlining India's Supply Chain
          </h1>
        </div>
      </motion.div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Introduction */}
        <p className="text-gray-800 text-lg leading-relaxed">
          Ever wondered how an Inland Container Depot (ICD) located miles away from seaports could
          revolutionize a nation’s supply chain? What makes inland facilities critical to enhancing
          trade efficiency? If yes, then you are definitely not the only one asking how businesses can
          move their shipments so efficiently from areas far away from the coast. Get ready to
          discover the answers to how these facilities are changing the landscape of logistics.
        </p>

        <p className="text-gray-800 text-lg mt-4 leading-relaxed">
          Let's enter the game-changing solution with ICD, which is emerging as vital players in
          India's logistics landscape. It offers businesses a seamless way to manage goods flow across
          the country’s vast hinterland. These facilities act as vital hubs that enhance the movement
          of containers and improve the efficiency of transportation, storage, and handling before
          they move to their final destination.
        </p>

        {/* Definition and Purpose */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Definition and Purpose of Inland Container Depot</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Inland Container Depot (ICD) is a specialized facility located away from seaports that serves as crucial nodes in
          the supply chain network. These terminals act as intermediary points for handling, storing and transferring
          containerized cargo between different modes of transportation.
        </p>

        {/* Key Components */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Key Components</h2>
        <ul className="list-disc list-inside text-gray-800 text-lg space-y-2 ml-6">
          <li><strong>Container Yard:</strong> Storage and handling of containers</li>
          <li><strong>Customs Clearance Area:</strong> Inspection and documentation processing</li>
          <li><strong>Warehousing Facilities:</strong> Short-term storage of consignments</li>
          <li><strong>Railway Sidings:</strong> Direct rail connectivity for container movement</li>
          <li><strong>Truck Parking Area:</strong> Staging area for trucks awaiting loading/unloading</li>
          <li><strong>Administrative Offices:</strong> Management and coordination of terminal operations</li>
        </ul>

        {/* Differences between ICD and Seaports */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Differences Between ICD and Seaports</h2>
        <table className="w-full border border-gray-300 text-gray-800">
          <thead>
            <tr>
              <th className="p-2 border-b">Feature</th>
              <th className="p-2 border-b">Inland Container Depot</th>
              <th className="p-2 border-b">Seaports</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b">Location</td>
              <td className="p-2 border-b">Situated inland</td>
              <td className="p-2 border-b">Located along the coast</td>
            </tr>
            <tr>
              <td className="p-2 border-b">Connectivity</td>
              <td className="p-2 border-b">Primarily relies on road and rail connectivity</td>
              <td className="p-2 border-b">Direct access to sea routes</td>
            </tr>
            <tr>
              <td className="p-2 border-b">Capacity</td>
              <td className="p-2 border-b">Typically, smaller handling capacity</td>
              <td className="p-2 border-b">Larger handling capacities</td>
            </tr>
            <tr>
              <td className="p-2 border-b">Customs Procedures</td>
              <td className="p-2 border-b">Customs clearance for import/export cargo</td>
              <td className="p-2 border-b">Customs clearance primarily at the port</td>
            </tr>
            <tr>
              <td className="p-2 border-b">Multimodal Integration</td>
              <td className="p-2 border-b">Excels in integrating various transportation modes</td>
              <td className="p-2 border-b">Focuses on sea transport with road/rail connections</td>
            </tr>
          </tbody>
        </table>

        {/* Key Benefits */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside text-gray-800 text-lg space-y-2 ml-6">
          <li>Reduced transportation costs by eliminating the need for long hauls from seaports to inland.</li>
          <li>Improved efficiency by consolidating cargo, reducing handling time.</li>
          <li>Enhanced connectivity to major transportation networks like roads, railways, and highways.</li>
          <li>Faster delivery times, improving customer satisfaction and competitiveness.</li>
          <li>Infrastructure development boosts economic growth in inland regions.</li>
        </ul>

        {/* Government Initiatives */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Government Initiatives Supporting ICD Development</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          The Indian government has recognized the role of ICDs, implementing policies like the National Logistics Policy, and
          allowing 100% FDI in logistics. Additionally, projects such as the Dedicated Freight Corridors and Sagarmala Project
          are enhancing ICD connectivity.
        </p>

        {/* Future Prospects */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Future Prospects</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          With increasing trade volumes, the growth of ICDs in India is promising, driven by government support, technological
          advancements, and a demand for efficient logistics solutions.
        </p>
      </div>
    </div>
  );
};

export default Blog1;
