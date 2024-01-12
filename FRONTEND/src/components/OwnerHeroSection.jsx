import React from 'react';
import { Link } from 'react-router-dom';

const OwnerHeroSection = () => {
  return (
    <section className="bg-blue-700 text-white text-center py-24 px-6 bg-cover bg-center" style={{ backgroundImage: "url('path-to-hero-background.jpg')" }}>
      <div className="max-w-xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Maximize Your Digital Assets</h1>
        <p className="text-xl mb-8">Leverage our platform to turn your digital screens into lucrative advertising spaces.</p>
      </div>
    </section>
  );
};

export default OwnerHeroSection;
