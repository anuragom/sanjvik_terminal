


// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaLinkedin, FaTwitter } from 'react-icons/fa';
// import Footer from './Footer';

// function Contacts() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       resume: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataWithFile = new FormData();
//     formDataWithFile.append('name', formData.name);
//     formDataWithFile.append('email', formData.email);
//     formDataWithFile.append('mobile', formData.mobile);
//     formDataWithFile.append('message', formData.message);
//     formDataWithFile.append('resume', formData.resume);

//     try {
//       await axios.post('http://localhost:5000/send-email', formDataWithFile, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email.');
//     }
//   };

//   return (
//     <div className="bg-gray-50">
//       {/* Full-width Banner */}
//       <div
//         className="h-[70vh] bg-cover bg-center"
//         style={{ backgroundImage: `url('Banners/Contact.svg')` }}
//       ></div>

//       {/* Contact Details and Form Section */}
//       <div className="grid md:grid-cols-2 gap-8 p-8">
//         {/* Left Side: Contact Info */}
//         <div className="p-6 space-y-4">
//           <h1 className="text-3xl font-bold text-gray-800">Get in Touch</h1>
//           <p>We are here to assist you with all your queries and requirements. Reach out to us through the following channels:</p>
//           <p>Email: <a href="mailto:tm@sanjvik.com" className="underline">tm@sanjvik.com</a></p>
//           <p>Phone: <a href="tel:+918448114803" className="underline">+91-8448114803</a></p>
//           <p>Site Office: Sanjvik Terminals Pvt. Ltd. ICD - Inland Container Depot, Plot No. 1, Sector 9, Near NH8, Industrial Growth Centre, Bawal, Distt. Rewari, Haryana.</p>
//           <p>Corporate Office: 130, Transport Center, Punjabi Bagh, New Delhi - 110035.</p>
//           <div className="flex space-x-4 mt-4">
//             <a href="https://www.linkedin.com/company/sanjvik-terminals-pvt-ltd" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
//               <FaLinkedin size={28} />
//             </a>
//             <a href="https://x.com/SanjvikTerminal" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
//               <FaTwitter size={28} />
//             </a>
//           </div>
//         </div>

//         {/* Right Side: Contact Form */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-center text-2xl font-bold text-indigo-900 mb-4">Contact Us</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Mobile:</label>
//               <input
//                 type="text"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Message:</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#002D62] text-white p-2 rounded-md hover:bg-indigo-700 transition"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   );
// }

// export default Contacts;


import React, { useState } from 'react';
import axios from 'axios';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Footer from './Footer';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithFile = new FormData();
    formDataWithFile.append('name', formData.name);
    formDataWithFile.append('email', formData.email);
    formDataWithFile.append('mobile', formData.mobile);
    formDataWithFile.append('message', formData.message);
    formDataWithFile.append('resume', formData.resume);

    try {
      await axios.post('http://localhost:5000/send-email', formDataWithFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Full-width Banner */}
      <div
        className="h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url('Banners/Contact.svg')` }}
      ></div>

      {/* Contact Details and Form Section */}
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Left Side: Contact Info */}
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">Get in Touch</h1>
          <p>We are here to assist you with all your queries and requirements. Reach out to us through the following channels:</p>
          <p><span className="font-semibold">Email:</span> <a href="mailto:tm@sanjvik.com" className="underline">tm@sanjvik.com</a></p>
          <p><span className="font-semibold">Phone:</span> <a href="tel:+918448114803" className="underline">+91-8448114803</a></p>
          <p><span className="font-semibold">Site Office:</span> Sanjvik Terminals Pvt. Ltd. ICD - Inland Container Depot, Plot No. 1, Sector 9, Near NH8, Industrial Growth Centre, Bawal, Distt. Rewari, Haryana.</p>
          <p><span className="font-semibold">Corporate Office:</span> 130, Transport Center, Punjabi Bagh, New Delhi - 110035.</p>
          {/* <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/company/sanjvik-terminals-pvt-ltd" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
              <FaLinkedin size={28} />
            </a>
            <a href="https://x.com/SanjvikTerminal" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
              <FaTwitter size={28} />
            </a>
            <a href="https://www.youtube.com/@SanjvikTerminals" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
              <FaYoutube size={28} className='' />
            </a>
          </div> */}
          <div className="flex space-x-4 mt-4">
  <a
    href="https://www.linkedin.com/company/sanjvik-terminals-pvt-ltd"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
    style={{ color: '#0077B5' }} // LinkedIn blue
  >
    <FaLinkedin size={28} />
  </a>
  <a
    href="https://x.com/SanjvikTerminal"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
    style={{ color: '#1DA1F2' }} // Twitter blue
  >
    <FaTwitter size={28} />
  </a>
  <a
    href="https://www.youtube.com/@SanjvikTerminals"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
    style={{ color: '#FF0000' }} // YouTube red
  >
    <FaYoutube size={28} />
  </a>
</div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-bold text-indigo-900 mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#002D62] text-white p-2 rounded-md hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Contacts;
