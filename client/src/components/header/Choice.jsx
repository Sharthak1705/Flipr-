import React from 'react';
import image1 from '../assets/image/11.svg'; 
import image2 from '../assets/image/12.svg';
import image3 from '../assets/image/13.svg';

const InfoSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-1/2">
          <h2 className="text-5xl font-extrabold text-gray-900 ">Not Your Average Realtor</h2>
          <p className="text-gray-600 text-xl">
            Discover the difference with our expert team. We offer personalized services, innovative solutions, and a commitment to excellence that sets us apart in the real estate industry.
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-end">
          <img src={image1} alt="Image 1" className="h-23 w-24 rounded-full mb-6" />
          <img src={image2} alt="Image 2" className="h-22 w-24 rounded-full mb-6 " />
          <img src={image3} alt="Image 3" className="h-22 w-24 rounded-full self-end" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
