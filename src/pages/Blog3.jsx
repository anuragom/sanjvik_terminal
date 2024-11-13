import React from 'react';
import { motion } from 'framer-motion';

const Blog3 = () => {
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
          src="/Banners/Blog 3.png" 
          alt="Enhancing Supply Chain Efficiency at Sanjvik Terminals"
          className="w-full h-[80vh] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            How Sanjvik Terminals Enhances Supply Chain Efficiency with Reliable Services
          </h1>
        </div>
      </motion.div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Introduction */}
        <p className="text-gray-800 text-lg leading-relaxed">
          In today's global economy, businesses are constantly seeking ways to optimize logistics, reduce costs, and improve delivery times. Inland container depots (dry ports), like ICD Bawal operated by Sanjvik Terminals Pvt. Ltd., play a crucial role in enhancing supply chain efficiency through reliable services and advanced solutions.
        </p>

        {/* Supply Chain Efficiency Overview */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Understanding Supply Chain Efficiency</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Supply chain efficiency ensures the seamless flow of goods with minimal waste and faster delivery times. Sanjvik Terminals acts as a vital link in this process, connecting suppliers, manufacturers, and distributors, while reducing delays and optimizing logistics operations for modern businesses.
        </p>

        {/* Key Areas of Expertise */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Key Areas of Expertise at Sanjvik Terminals</h2>
        
        {/* State-of-the-Art Infrastructure */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">State-of-the-Art Infrastructure</h3>
        <p className="text-gray-800 text-lg leading-relaxed">
          Equipped with advanced storage for domestic and EXIM cargo, Sanjvik Terminals’ infrastructure supports efficient container handling. This setup reduces delays and maintains a smooth flow of goods, ensuring timely delivery for customers across industries.
        </p>

        {/* Expert Cargo Handling */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Expert Cargo Handling</h3>
        <p className="text-gray-800 text-lg leading-relaxed">
          Sanjvik Terminals excels in fast, accurate cargo handling with a skilled workforce and modern equipment. From automotive parts to specialized cargo, the team ensures secure and efficient handling, meeting delivery timelines and controlling costs.
        </p>

        {/* Services at Sanjvik Terminal */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Services We Offer at Sanjvik Terminals</h2>

        {/* Multi-Modal Transportation */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Multi-Modal Transportation</h3>
        <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed space-y-1 ml-4">
          <li><strong>Integrated Solutions:</strong> Combining road, rail, and sea transport for streamlined operations, reducing delays.</li>
          <li><strong>Cost-Effective:</strong> Optimized transit routes minimize costs while maximizing delivery speed.</li>
          <li><strong>Seamless Connectivity:</strong> Ensuring smooth first-mile and last-mile connectivity for hassle-free pickups and deliveries.</li>
          <li><strong>Strategic Location:</strong> Efficient container handling and transfer at well-connected hubs.</li>
        </ul>

        {/* Terminal Management */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Terminal Management: Enhancing Hinterland Connectivity</h3>
        <p className="text-gray-800 text-lg leading-relaxed">
          Sanjvik Terminals' Inland Container Depot (ICD) at Bawal is strategically located for container movement into the hinterlands, facilitating smooth logistics operations.
        </p>

        {/* Terminal Management Offerings */}
        <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed space-y-1 ml-4 mt-4">
          <li><strong>TXR Examination:</strong> Comprehensive rail wagon safety checks, reducing turnaround time.</li>
          <li><strong>Container Repairing:</strong> In-house repair services by skilled technicians ensure container reliability.</li>
          <li><strong>Container Leasing:</strong> High-quality containers available with flexible leasing options for efficient storage and transport.</li>
        </ul>

        {/* Custom Clearance */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Custom Clearance: Simplifying Trade</h3>
        <p className="text-gray-800 text-lg leading-relaxed">
          Sanjvik Terminals offers customs clearance services to simplify cross-border trade. An expert team manages all regulatory compliance, including tariff classification and duty calculation, while the Risk Management System (RMS) and AEO office further expedite the process.
        </p>

        {/* Warehousing */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Warehousing: Secure and Scalable</h3>
        <p className="text-gray-800 text-lg leading-relaxed">
          With a 31,000 sq. ft. facility, Sanjvik Terminals offers bonded and domestic warehousing solutions. Their flexible storage accommodates varied business needs, from small-scale to large-scale demands.
        </p>
        
        <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed space-y-1 ml-4 mt-4">
          <li><strong>Scalable Storage:</strong> Customized solutions for businesses of all sizes.</li>
          <li><strong>Bonded and Domestic Warehouses:</strong> 8,000 sq. ft. for bonded storage and 23,000 sq. ft. for domestic storage.</li>
          <li><strong>Customized Options:</strong> Tailored storage to meet unique needs.</li>
        </ul>

        {/* Leveraging Technology */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Leveraging Advanced Technology at ICD Bawal</h2>
        <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed space-y-1 ml-4">
          <li><strong>Risk Management System (RMS):</strong> Streamlines customs clearance through green channel processing.</li>
          <li><strong>Freight Operating Information System (FOIS):</strong> Real-time shipment tracking for greater supply chain transparency.</li>
          <li><strong>Yard Electrification:</strong> Enhances efficiency by eliminating the need for engine reversals, reducing time and costs.</li>
          <li><strong>CCTV Coverage:</strong> 24/7 surveillance ensures cargo security.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Sanjvik Terminals: A Commitment to Efficiency and Reliability</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Sanjvik Terminals at ICD Bawal enhances supply chain efficiency through advanced infrastructure, expert cargo handling, and innovative technology. With services like multi-modal transport, terminal management, customs clearance, and warehousing, we streamline container movement into the hinterlands, supporting businesses across India.
        </p>
        <p className="text-gray-800 text-lg mt-4 leading-relaxed">
          Our dedication to reliability and efficiency makes us the preferred choice for businesses seeking seamless logistics solutions.
        </p>
      </div>
    </div>
  );
};

export default Blog3;
