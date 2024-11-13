import React from "react";
import { IoExpandOutline } from "react-icons/io5"; // Correct icon import

const ProjectSection = () => {
  return (
    <section className="section bg-alice-blue" aria-label="project">
      <div className="container mx-auto px-4">
        <p className="text-dark-orange uppercase tracking-widest text-center text-lg mb-2">
          Projects
        </p>
        <h2 className="text-3xl font-semibold text-prussian-blue text-center mb-6">
          Featured Projects
        </h2>
        <p className="text-center mb-12 text-lg">
          "OM Logistics' project features include cutting-edge technology,
          customizable solutions, real-time tracking, efficient management, and
          scalable infrastructure for diverse business needs."
        </p>

        <ul className="flex overflow-x-auto gap-5 pb-10 snap-x snap-mandatory scrollbar-thumb-prussian-blue scrollbar-track-gray-200 scrollbar-thin">
          {/* Project Item 1 */}
          <li className="project-item snap-start min-w-full">
            <div className="relative bg-white rounded-lg shadow-lg">
              <figure className="relative w-full h-[352px]">
                <img
                  src="./assets/images/project-1.jpg"
                  alt="Warehouse inventory"
                  className="object-cover w-full h-full"
                />
              </figure>
              <button
                className="absolute top-8 left-8 bg-dark-orange text-white text-2xl p-4 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="View image"
              >
                <IoExpandOutline /> {/* Updated Icon */}
              </button>
              <div className="bg-white p-6 mt-[-40px] ml-8 relative z-10 shadow-md">
                <p className="text-dark-orange text-sm font-medium">
                  Warehousing , Distribution
                </p>
                <h3 className="text-prussian-blue text-xl font-semibold">
                  <a href="#" className="hover:text-dark-orange">
                    Warehouse inventory
                  </a>
                </h3>
                <a
                  href="#"
                  className="mt-2 text-prussian-blue text-sm uppercase font-semibold hover:text-dark-orange"
                >
                  Read More
                </a>
              </div>
            </div>
          </li>

          {/* Repeat Project Item for other projects */}
          <li className="project-item snap-start min-w-full">
            <div className="relative bg-white rounded-lg shadow-lg">
              <figure className="relative w-full h-[352px]">
                <img
                  src="./assets/images/project-2.jpg"
                  alt="Minimize Manufacturing"
                  className="object-cover w-full h-full"
                />
              </figure>
              <button
                className="absolute top-8 left-8 bg-dark-orange text-white text-2xl p-4 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="View image"
              >
                <IoExpandOutline /> {/* Updated Icon */}
              </button>
              <div className="bg-white p-6 mt-[-40px] ml-8 relative z-10 shadow-md">
                <p className="text-dark-orange text-sm font-medium">
                  Logistics, Analytics
                </p>
                <h3 className="text-prussian-blue text-xl font-semibold">
                  <a href="#" className="hover:text-dark-orange">
                    Minimize Manufacturing
                  </a>
                </h3>
                <a
                  href="#"
                  className="mt-2 text-prussian-blue text-sm uppercase font-semibold hover:text-dark-orange"
                >
                  Read More
                </a>
              </div>
            </div>
          </li>

          {/* Add more project items as needed */}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
