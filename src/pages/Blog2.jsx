import React from 'react';
import { motion } from 'framer-motion';

const Blog2 = () => {
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
          src="/Banners/Blog 2.jpeg" 
          alt="How Multi-Modal Transportation Enhances Logistics Efficiency"
          className="w-full h-[80vh] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            How Multi-Modal Transportation at Sanjvik Terminals Enhances Logistics Efficiency
          </h1>
        </div>
      </motion.div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Introduction */}
        <p className="text-gray-800 text-lg leading-relaxed">
          As industries expand, the demand for more efficient and cost-effective logistics solutions has increased more than ever. 
          At the heart of this evolution lies multimodal transportation, a system that has revolutionized the way goods are transported.
          Sanjvik Terminals Pvt. Ltd., with its Inland Container Depot (ICD) at Bawal, strategically positioned near key industrial zones 
          in northern India, has embraced this approach, significantly boosting logistics efficiency.
        </p>

        <p className="text-gray-800 text-lg mt-4 leading-relaxed">
          This article will explore how multi-modal transportation at Sanjvik Terminals contributes to optimizing freight operations, 
          enhances containerized cargo movement, and strengthens supply chain management in India.
        </p>

        {/* Multi-modal Transportation Definition */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">What is Multi-Modal Transportation?</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Multi-modal transportation refers to the movement of cargo using more than one mode of transport - such as road, rail, sea, 
          and air - within a single journey, coordinated under a single contract. This integrated approach ensures efficient cargo 
          movement from origin to destination, improving operational flexibility, cost-effectiveness, and delivery timelines.
        </p>

        {/* Enhancing Logistics Efficiency */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Enhancing Logistics Efficiency Through Multi-Modal Solutions</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          The ability to move goods efficiently is key to staying competitive in a global landscape. Sanjvik Terminals has developed a 
          network of transportation solutions that integrate each mode of transport, leading to enhanced logistics efficiency.
        </p>

        {/* Integrated Transport Solutions */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Integrated Transport Solutions for Seamless Connectivity</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          One of the biggest advantages of multi-modal logistics in India is the flexibility it offers in managing cargo movement. 
          Sanjvik Terminals provides integrated transport solutions that leverage its strategic location and transportation links, 
          ensuring swift and efficient movement of containers.
        </p>
        
        {/* Location Details */}
        <p className="text-gray-800 text-lg mt-4 leading-relaxed">
          Located within the HSIIDC industrial estate in Bawal, Haryana, Sanjvik Terminals is strategically situated near major highways 
          like NH-48 and NH-71, connecting it to critical industrial hubs. Its proximity to the Delhi-Mumbai Industrial Corridor (DMIC) and 
          Indira Gandhi International Airport (DEL) enhances air cargo handling, while seamless rail connectivity to major ports such as 
          Mundra, Pipavav, and JNPT via the Western Dedicated Freight Corridor (WDFC) ensures timely container transport.
        </p>

        {/* Optimizing Freight */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Optimizing Freight with Multi-Modal Logistics</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          At Sanjvik Terminals, multi-modal transportation enables the most suitable transport mode to be used at each stage of the 
          journey. Rail transport might be cost-effective for long-distance bulk shipments, while road transport is often more efficient 
          for short-distance deliveries. By integrating both modes, Sanjvik Terminals optimizes freight, reducing costs and ensuring faster deliveries.
        </p>

        {/* Technology in Logistics */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">The Role of Technology in Enhancing Transparency</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Sanjvik Terminals has invested heavily in advanced technology to further boost logistics efficiency. The integration of 
          FOIS (Freight Operations Information System) provides real-time tracking and transparency, enabling businesses to plan their 
          operations more accurately, ensuring on-time deliveries and minimizing delays.
        </p>

        {/* Environmental and Economic Benefits */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Environmental and Economic Benefits</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Multi-modal transportation also has positive environmental impacts. By optimizing routes and combining transport modes, 
          businesses can reduce their carbon footprint. Rail transport, for example, is more energy-efficient than road transport, 
          especially for bulk shipments over long distances.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">Unlocking Efficiency</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          As businesses in India and globally continue to expand, efficient supply chain management is more critical than ever. Sanjvik 
          Terminals is at the forefront of this transformation, offering multi-modal logistics that streamline container movement. With its 
          integrated transport solutions, Sanjvik Terminals not only enhances logistics efficiency but also provides the flexibility businesses 
          need to meet unique transportation requirements.
        </p>
      </div>
    </div>
  );
};

export default Blog2;
