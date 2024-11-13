import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Lillian Grace',
    role: 'VP, Green Valley International',
    image: '/landingPage/tes1.jpg',
    review: 'The staff is amazing! Very helpful and considerate with a sense of urgency & Loads...',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Nathan Felix',
    role: 'CEO, High Rise Construction',
    image: '/landingPage/test2.jpg',
    review: 'I am highly impressed with  professionalism people in this warehouse...',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Manager, Bluewave Inc',
    image: '/landingPage/test3.jpg',
    review: 'Excellent service, the team went above and beyond my expectations.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jane Smith',
    role: 'CEO, StartUp LLC',
    image: '/landingPage/test4.jpg',
    review: 'The best experience I’ve ever had. Professional and dedicated staff.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Mike Tyson',
    role: 'Head of HR, NextGen Labs',
    image: '/landingPage/test5.jpg',
    review: 'Absolutely phenomenal service, highly recommended.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Emily Johnson',
    role: 'Director, ABC Corp',
    image: '/landingPage/test6.jpg',
    review: 'A professional and reliable team. Exceeded my expectations.',
    rating: 4.5,
  },
  {
    id: 7,
    name: 'Alex Turner',
    role: 'CFO, BrightFuture LLC',
    image: '/landingPage/test7.jpg',
    review: 'A wonderful experience from start to finish for everyone.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Nathan Felix',
    role: 'CEO, High Rise Construction',
    image: '/landingPage/test2.jpg',
    review: 'I am highly impressed with  professionalism people in this warehouse...',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Manager, Bluewave Inc',
    image: '/landingPage/test3.jpg',
    review: 'Excellent service, the team went above and beyond my expectations.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jane Smith',
    role: 'CEO, StartUp LLC',
    image: '/landingPage/test4.jpg',
    review: 'The best experience I’ve ever had. Professional and dedicated staff.',
    rating: 4,
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTransitioning(false);
    }, 500); // Control the speed of transition (500ms)
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 3000); // Auto-slide every 3 seconds

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prevSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTransitioning(false);
    }, 500);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">1000+ Happy Customers Said</h2>
          <p className="text-[#00308F] mt-2 text-3xl font-bold">Testimonials</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Carousel Inner Wrapper */}
          <div
            className={`flex transition-transform ease-in-out duration-500 ${
              transitioning ? 'transform translate-x-0' : ''
            }`}
            style={{
              transform: `translateX(-${(currentIndex % testimonials.length) * 33.33}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-1/3 px-4 transition-transform"
                style={{ minWidth: '33.33%' }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <p className="text-gray-600 mb-4">{testimonial.review}</p>
                  <div className="flex justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="text-[#00308F] mt-2">
                    {'⭐'.repeat(Math.floor(testimonial.rating))}
                    {testimonial.rating % 1 !== 0 && '⭐'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next/Prev Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#00308F] text-white p-2 rounded-full z-10"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#00308F] text-white p-2 rounded-full z-10"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
