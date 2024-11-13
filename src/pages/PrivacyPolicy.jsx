import React, { useEffect, useState } from 'react';
import { FaShieldAlt, FaFileContract, FaUserSecret } from 'react-icons/fa';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
   <div>
     <div className={`min-h-screen p-8 bg-gray-100 flex flex-col items-center justify-center`}>
      <div
        className={`transition-transform duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Privacy Policy</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
            <FaShieldAlt className="text-blue-500 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Respect for Privacy</h2>
            <p>
              We at Sanjvik Terminals Pvt. Ltd. respect the privacy of everyone who visits our website
              and are committed to maintaining the privacy and security of personal information.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
            <FaFileContract className="text-blue-500 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Consent & Terms</h2>
            <p>
              By using our website, you consent to our Privacy Policy and agree to its terms. We
              collect standard internet-related information to improve your experience.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
            <FaUserSecret className="text-blue-500 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Collected Information</h2>
            <p>
              We may collect and store information like IP address, browser type, pages visited, etc.
              This data is used for statistical purposes to make our site more useful.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
            <FaFileContract className="text-blue-500 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
            <p>
              Certain areas of the website, such as "Shipment Tracking", may require a registration ID
              for access. This information may be used for marketing purposes by Sanjvik Terminals.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
            <FaShieldAlt className="text-blue-500 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Legal Disclosures</h2>
            <p>
              Sanjvik Terminals Pvt. Ltd. will not disclose personally identifiable information without
              permission unless required by law or to protect rights and safety.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
            <FaFileContract className="text-blue-500 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Policy Changes</h2>
            <p>
              Sanjvik Terminals Pvt. Ltd. reserves the right to amend the privacy policy at any time
              without prior notice.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    
   </div>
  );
};

export default PrivacyPolicy;



// import React, { useEffect, useState } from 'react';
// import { FaShieldAlt, FaUserSecret, FaFileContract } from 'react-icons/fa';

// const PrivacyPolicy = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen flex items-center justify-center">
//       <div
//         className={`container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg transform transition-all duration-1000 ease-out ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}
//       >
//         <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Privacy Policy</h1>

//         <div className="space-y-12">
//           {/* Section 1 */}
//           <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
//             <FaShieldAlt className="text-blue-600 text-5xl" />
//             <div>
//               <h2 className="text-3xl font-semibold text-gray-800 mb-2">Respect for Privacy</h2>
//               <p className="text-gray-600">
//                 At Sanjvik Terminals Pvt. Ltd., we respect your privacy. We are committed to
//                 safeguarding the personal information of every visitor. This policy outlines how we
//                 handle data when you use our website.
//               </p>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
//             <FaFileContract className="text-blue-600 text-5xl" />
//             <div>
//               <h2 className="text-3xl font-semibold text-gray-800 mb-2">Consent & Terms</h2>
//               <p className="text-gray-600">
//                 By using our website, you agree to our Privacy Policy and its terms. We collect
//                 certain information, such as your IP address, browser type, and the pages you visit.
//                 This data is used to improve your experience.
//               </p>
//             </div>
//           </div>

//           {/* Section 3 */}
//           <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
//             <FaUserSecret className="text-blue-600 text-5xl" />
//             <div>
//               <h2 className="text-3xl font-semibold text-gray-800 mb-2">Information We Collect</h2>
//               <p className="text-gray-600">
//                 We collect standard internet information such as your IP address, date and time of
//                 visit, and browser type. This helps us understand how visitors use our site and to
//                 make improvements.
//               </p>
//             </div>
//           </div>

//           {/* Section 4 */}
//           <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
//             <FaFileContract className="text-blue-600 text-5xl" />
//             <div>
//               <h2 className="text-3xl font-semibold text-gray-800 mb-2">User Registration & Access</h2>
//               <p className="text-gray-600">
//                 Areas like "Shipment Tracking" may require a user to register. Registered users' data
//                 may be used for marketing purposes to provide better services.
//               </p>
//             </div>
//           </div>

//           {/* Section 5 */}
//           <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
//             <FaShieldAlt className="text-blue-600 text-5xl" />
//             <div>
//               <h2 className="text-3xl font-semibold text-gray-800 mb-2">Legal Disclosures</h2>
//               <p className="text-gray-600">
//                 We will not disclose personally identifiable information without consent unless
//                 legally required, or in situations where it is necessary to protect our rights and
//                 security.
//               </p>
//             </div>
//           </div>

//           {/* Section 6 */}
//           <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
//             <FaFileContract className="text-blue-600 text-5xl" />
//             <div>
//               <h2 className="text-3xl font-semibold text-gray-800 mb-2">Policy Changes</h2>
//               <p className="text-gray-600">
//                 We reserve the right to modify this privacy policy at any time without prior notice.
//                 Any changes will be updated on this page, and it is your responsibility to review
//                 the policy periodically.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;


