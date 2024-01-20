import React from 'react';
import { Link } from 'react-router-dom';
import board from "../../assets/Board.jpg"; // Import the image

const OwnerHeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Maximize Your Digital Space, <span className="text-blue-600"> Maximize Your Profits</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
          Unlock New Revenue Streams with AdvisioScreen. Our innovative self-service platform revolutionizes the billboard advertising landscape, opening doors to a diverse range of advertisers. Experience the power of flexibility and reach with AdvisioScreen, where we connect you to opportunities that align with your business scale and vision.
          </p>
          <Link to="/contacts" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Chat with Us
          </Link>
        </div>
        <div className="lg:w-1/2 px-4">
          <img 
            className="rounded-lg shadow-lg w-full object-cover object-center"
            alt="Media Owners"
            src={board} 
          />
        </div>
      </div>
    </div>
  );
};

export default OwnerHeroSection;
