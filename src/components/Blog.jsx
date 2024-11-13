


import React from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: '27 Aug',
      title: 'The Role of Inland Container Depot (ICD) in Streamlining India  Supply Chain',
      link:'/blog1',
     
      image: '/Banners/Blog 1.jpeg',
    },
    {
      id: 2,
      date: '19 Sep',
      title: ' How multi-modal transportation at Sanjvik Terminals enhances logistics efficiency',
      link:'/blog2',
      image: '/Banners/Blog 2.jpeg',
    },
    {
      id: 3,
      date: '26 Oct',
      title: 'How multi-modal transportation at Sanjvik Terminals enhances logistics efficiency',
      link:'/blog3',
      image: '/Banners/Blog 3.png',
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <div className="text-[#00308F] font-semibold flex items-center">
            <FiArrowLeft className="mr-2" /> 
            NEWS & UPDATES
          </div>
          <h2 className="text-4xl font-bold">Latest From Our Blog Post</h2>
          <div className="text-[#00308F] font-semibold flex items-center">
            READ ALL NEWS 
            <FiArrowRight className="ml-2" />
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden relative group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-all duration-300 group-hover:h-72" 
                />
              </div>

              {/* Text Always Visible Below Image */}
              <div className="p-6 transition-all duration-300 group-hover:mt-4"> 
                <div className="flex items-center justify-between text-[#00308F] text-lg font-bold mb-2">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                {/* <button className="text-[#00308F] font-semibold flex items-center">
                  MORE DETAILS <FiArrowRight className="ml-2" />
                </button> */}
                  <Link to={post.link} className="text-[#00308F] font-semibold flex items-center">
                  MORE DETAILS <FiArrowRight className="ml-2" />
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

