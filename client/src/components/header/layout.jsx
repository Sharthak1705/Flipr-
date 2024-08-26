import React from 'react';
import Paint from '../assets/icons/paint.svg';
import Dollar from '../assets/icons/dollar.svg';
import Home from '../assets/icons/home.svg';


const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Why Choose Us?</h2>
        <div className="flex justify-between space-x-8">
          <div className="bg-transparent p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <img src={Home} alt="Potential ROI" className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Potential ROI</h3>
            <p className="mt-2 text-gray-600">Maximize your potential ROI with our expert strategies. We focus on optimizing your investments to ensure the highest returns, leveraging data-driven insights and innovative approaches to boost profitability and growth.</p>
          </div>
          <div className="bg-transparent p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <img src={Paint} alt="Design" className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Design</h3>
            <p className="mt-2 text-gray-600">Craft innovative, user-friendly designs that captivate your audience. Our design team prioritizes aesthetics and functionality, creating visually appealing and intuitive interfaces that enhance user experience and engagement.</p>
          </div>
          <div className="bg-transparent p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <img src={Dollar} alt="Marketing" className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Marketing</h3>
            <p className="mt-2 text-gray-600">Implement effective marketing strategies to boost your brand’s presence. Our targeted campaigns are designed to reach your ideal audience, increase visibility, and drive higher returns on investment, ensuring your business stands out in a competitive market.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

