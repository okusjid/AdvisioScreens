import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-black text-white text-center py-24 px-6 bg-cover bg-center" style={{ backgroundImage: "url('path-to-your-background-image.jpg')" }}>
      <h1 className="text-6xl font-extrabold text-red-600 mb-4 leading-tight">Elevate Your Brand Visibility</h1>
      <p className="text-2xl mb-6 max-w-xl mx-auto">Transform the way you engage with your audience using our state-of-the-art digital billboards. Affordable, effective, and tailor-made for your business needs.</p>
      <Link to="/signup" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
        Start Your Journey
      </Link>
    </section>
  );
};

export default HeroSection;
