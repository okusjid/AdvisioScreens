import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Hero-Home'; 
import FeaturesSection from '../components/Feature-Home';
import CTASection from '../components/CTA-Home';
// Home Component
const Home = () => {
  return (
    <>    
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
};

export default Home;