import React from 'react';
import { Link } from 'react-router-dom';
import billboardImage from "../assets/Billboard.png"; 

const HeroSection = () => {
  return (
    <section className="bg-black text-white text-center py-24 px-6 bg-cover bg-center" 
             style={{ 
               backgroundImage: `url(${billboardImage})`,
             }}>
      <h1 style={{textAlign: "left", fontSize: 52}} className="font-extrabold text-red-600 mb-4 leading-tight ">
        Elevate Your Brand Visibility
      </h1>
      <p style={{textAlign: "left", fontSize: 20}} className="mb-6 max-w-xl ">
        Transform the way you engage with your audience using our state-of-the-art digital billboards. Affordable, effective, and tailor-made for your business needs.
      </p>
      <Link to="/signup" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1">
        Start Your Journey
      </Link>
    </section>
  );
};

export default HeroSection;
