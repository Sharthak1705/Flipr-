import React from 'react';
import Card1 from '../assets/image/car.svg';
import Card2 from '../assets/image/card1.svg';
import Card3 from '../assets/image/card2.svg';
import Card4 from '../assets/image/card3.svg';
import Card5 from '../assets/image/cards.svg';

function OurProjects() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-12">
  
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Projects</h1>
      
      
      <p className="text-center text-gray-700 max-w-xl mb-8">
        Explore our diverse range of projects designed to meet various needs.
      </p>
      
      
      <div className="flex justify-center space-x-4">

        <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
          <img src={Card1} alt="Project 1" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Cosultaitions</h3>
            <p className="text-gray-600 mb-4">Expert guidance for your needs.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
          <img src={Card2} alt="Project 2" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Design</h3>
            <p className="text-gray-600 mb-4">Creative solutions for visual impact.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
          <img src={Card3} alt="Project 3" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Marketing & Design</h3>
            <p className="text-gray-600 mb-4">Effective campaigns driving growth and engagement.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Learn More
            </button>
          </div>
        </div>

     
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
          <img src={Card4}alt="Project 4" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Consultation & Marketing</h3>
            <p className="text-gray-600 mb-4">Innovative strategies to boost brand success.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Learn More
            </button>
          </div>
        </div>

     
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
          <img src={Card5}alt="Project 5" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Consultant</h3>
            <p className="text-gray-600 mb-4">Creative solutions for visual impact.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
