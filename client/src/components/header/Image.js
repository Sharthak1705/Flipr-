import React from 'react';
import image1 from '../assets/image/Image1.svg';
import image2 from '../assets/image/image2.svg';
import image3 from '../assets/image/Image3.svg';

const ImagePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-8">
            <div className="w-full max-w-4xl">
                <div className="flex flex-col items-center space-y-4">
                    {/* First Image */}
                    <div className="flex justify-start w-full">
                        <img
                            src={image1}
                            alt="First"
                            className="w-1/2 h-50 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Second Image */}
                    <div className="flex justify-center w-full">
                        <img
                            src={image2}
                            alt="Second"
                            className="w-3/4 h-64 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Third Image */}
                    <div className="flex justify-end w-full">
                        <img
                            src={image3}
                            alt="Third"
                            className="w-1/2 h-50 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePage;
