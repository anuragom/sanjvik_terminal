// import React from 'react'

// const OurValue = () => {
//   return (
//     <div>OurValue</div>
//   )
// }

// export default OurValue


import React from 'react';
import { FaShieldAlt, FaUserTie, FaBalanceScale, FaAward, FaLeaf, FaHandshake } from 'react-icons/fa'; // React icons

const OurValue = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[160vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/page/value.jpg')" }} // Replace with correct path to your image
    >
      <div className="bg-white bg-opacity-80 rounded-lg p-6 max-w-5xl w-full text-center shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00308F]">Our Values</h1>
        <p className="text-md md:text-lg text-gray-700 mb-6">
          Our core values shape the foundation of everything we do. These principles guide our actions, influence our decisions, and reflect our commitment to delivering excellence in our services. With this, we ensure that our operations are not only efficient but also ethical, customer-focused, and sustainable.
        </p>

        {/* Icon Section for Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <ValueCard icon={<FaShieldAlt size={40} />} title="Safety" description="Ensuring the highest standards of safety and security in all operations to protect our people, assets, and cargo." />
          <ValueCard icon={<FaUserTie size={40} />} title="Customer-Centric Approach" description="Prioritizing customer needs by offering tailored, reliable solutions that simplify logistics operations." />
          <ValueCard icon={<FaBalanceScale size={40} />} title="Integrity" description="Conducting business with transparency, honesty, and accountability at every level." />
          <ValueCard icon={<FaAward size={40} />} title="Excellence" description="Striving for operational excellence through continuous improvement and adoption of advanced technologies." />
          <ValueCard icon={<FaLeaf size={40} />} title="Sustainability" description="Committed to environmentally responsible practices that reduce our impact on the planet." />
          <ValueCard icon={<FaHandshake size={40} />} title="Collaboration" description="Working together with partners, employees, and stakeholders to nurture mutual growth and success." />
        </div>
      </div>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-110">
      {icon}
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default OurValue;
