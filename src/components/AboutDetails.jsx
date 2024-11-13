


import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AboutDetails = () => {
  return (
    <div className="relative ">
      
    

    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative  w-full"
      >
        <img
          src="/Banners/ABOUT US.png"
          alt="about us"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">Company Overview</h1>
        </div>
      </motion.div>

      <div className=" flex items-center justify-center text-center">
          <h1 className="text-[#002D62] text-4xl md:text-4xl font-extrabold drop-shadow-lg mb-4 mt-8">About Us</h1>
        </div>

      <div className=" py-8  ">
        <div className="max-w-6xl mx-auto  bg-white shadow-lg rounded-lg p-4">
          
          <p className="mt-4 text-black leading-relaxed text-lg">
          Sanjvik Terminals Pvt. Ltd. was incorporated in 2007 with the primary objective of developing and operating an Inland Container Depot (ICD) in Bawal. In 2024, the company was acquired by Om Logistics Ltd., a premier company in the Indian logistics and supply chain management industry. This acquisition has empowered Sanjvik Terminals to further enhance its services by leveraging Om Logistics’ vast expertise and nationwide network, making it a key contributor to the growth of India's logistics and supply chain ecosystem

          </p>
          <p className='mt-4 text-black leading-relaxed text-lg'>
          Strategically located, the terminal has been designed to facilitate efficient movement and storage of both domestic & EXIM cargo. Situated near key industrial zones and major highways, the terminal offers exceptional connectivity to important ports and airports across the country. The infrastructure at Sanjvik Terminals is specifically designed to manage high volumes of cargo with exceptional precision
          </p>
          <p className='mt-4 text-black leading-relaxed text-lg '>
          The ICD is fully equipped to handle containers with integrated management systems that ensure seamless operations and timely delivery of all cargo. The advanced infrastructure with well-defined workflows at the facility enables high volumes to be managed with safety, minimizing delays and improving overall operational efficiency. These systems are continuously monitored and upgraded to keep pace with the evolving demands of the logistics industry. Our commitment to innovation, safety and excellence ensures that we can adapt to the changing landscape of global trade while delivering customized services to our customer

          </p>
        </div>
      </div>


{/* <div className="py-16 bg-gradient-to-r from-[#e3f2fd] to-[#ffffff]">
   <div className=" flex items-center justify-center text-center">
          <h1 className="text-[#002D62] text-4xl md:text-4xl font-extrabold drop-shadow-lg mb-4 "> Our Facility</h1>
        </div>
  <div className="container mx-auto px-4 lg:px-12">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <div className="space-y-6">
        
        <p className="text-gray-700 text-lg leading-relaxed">
          Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity. With its prime location and well-established transportation links, the facility is designed to streamline cargo movement, ensuring fast and efficient delivery.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal. One of its advantages is the absence of "No Entry" restrictions, ensuring that vehicles can move freely and without delays both when entering and exiting the terminal.
        </p>
      </div>
      <div>
        <img
          src="/Banners/Our Facility.svg"
          alt="Our Facility"
          className="rounded-lg shadow-2xl w-auto h-[70vh] max-h-[80vh] mx-auto" // Use max height and auto width for responsive design
        />
      </div>
    </div>
  </div>
</div> */}


      {/* Strategic Location Section */}
      

      {/* <div className="bg-indigo-100 py-8  bg-gradient-to-r from-[#e3f2fd] to-[#ffffff]">
         <div className=" flex items-center justify-center text-center">
          <h1 className="text-[#002D62] text-4xl md:text-4xl font-extrabold drop-shadow-lg mb-4 "> Strategic Location</h1>
        </div>
        <div className="max-w-6xl mx-auto  shadow-lg rounded-lg p-4">
          
          <p className="mt-4 text-black leading-relaxed text-lg">
          The facility's strategic location is a significant asset within the Haryana State Industrial and Infrastructure Development Corporation (HSIIDC) industrial estate and very close proximity to Delhi-Mumbai Industrial Corridor (DMIC), it plays a vital role in facilitating the movement of container across the region. The terminal is strategically situated near key national highways NH-48 and NH-71, provides easy access to northern and western India via road. Additionally, the direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways supports swift and efficient rail cargo transport. This prime location ensures exceptional connectivity to major ports such as Mundra, Pipavav and JNPT, facilitating seamless cargo movement across the region. Its proximity to Indira Gandhi International Airport (DEL) further enhances air cargo handling efficiency, making it easier to manage and expedite air freight operations. Overall, this well-integrated system of ports, airports, highways and railways positions Sanjvik Terminals as a pivotal player in handling containers (EXIM & Domestic), steel and auto with exceptional ease and efficiency.

          </p>
          
        </div>
      </div> */}

      {/* Seamless Connectivity Section */}

      
      <div className=" py-8  bg-white">
         <div className=" flex items-center justify-center text-center">
          <h1 className="text-[#002D62] text-4xl md:text-4xl font-extrabold drop-shadow-lg mb-4 "> Seamless Connectivity</h1>
        </div>
        <div className="max-w-6xl mx-auto  shadow-lg rounded-lg p-4">
          
          <p className="mt-4 text-black leading-relaxed text-lg">
          Effective connectivity is crucial to logistics and Sanjvik Terminals recognizes its pivotal role. It is seamlessly connected by rail to the Gateway Ports of Mundra, Pipavav and JNPT, the largest and most significant ports in India, ensuring seamless cargo connectivity. This connectivity is enhanced through a strategic partnership with Pristine Logistics for our Exim rail . This collaboration ensures reliable and efficient rail transportation services for the smooth and timely movement of cargo. By leveraging this extensive connectivity, it delivers a streamlined logistics experience, effectively reducing transit times and improving supply chain efficiency.

          </p>
          
        </div>
      </div>
      

      

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutDetails;
