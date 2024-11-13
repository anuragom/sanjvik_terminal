import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter bg-[#002D62] py-12" aria-label="newsletter">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Newsletter Banner */}
        <figure className="newsletter-banner img-holder mb-6 md:mb-0 md:mr-8">
          <img 
            src="./landingPage/1.png" 
            width="303" 
            height="381" 
            alt="newsletter banner" 
            className="w-full h-auto max-w-[303px]"
          />
        </figure>

        {/* Newsletter Content */}
        <div className="newsletter-content text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-6">
            Subscribe for offers and news
          </h2>

          <form className="newsletter-form flex flex-col md:flex-row items-center">
            <input 
              type="email" 
              name="email_address" 
              placeholder="Enter Your Email" 
              aria-label="email" 
              className="email-field bg-white text-gray-800 text-lg h-16 px-5 mb-4 md:mb-0 md:mr-4 focus:ring-2 focus:ring-gray-400 transition duration-300 outline-none"
            />

            <button 
              type="submit" 
              className="newsletter-btn bg-blue-900 text-white font-bold px-5 py-3 uppercase tracking-wider hover:bg-blue-800 transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
