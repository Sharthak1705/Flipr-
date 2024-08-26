
import React from 'react';
import backgroundImage from '../assets/image/Rectangle.svg';
import Newsletter from './Newsletter'; 

function ListingProcess() {
  return (
    <section className="relative">
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-3xl mb-4">Learn more about our listing process,</h2>
          <h3 className="text-3xl mb-8">as well as our additional staging and design work.</h3>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-blue-600 py-4">
        <div className="container mx-auto flex justify-between items-center text-white">
          <nav className="flex space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/projects" className="hover:underline">Projects</a>
            <a href="/testimonials" className="hover:underline">Testimonials</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <h5 className='pl-2 pr-2'>Newsletter</h5>
            <Newsletter /> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListingProcess;
