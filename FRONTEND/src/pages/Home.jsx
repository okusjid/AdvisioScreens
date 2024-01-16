import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Hero-Home'; 
import FeaturesSection from '../components/Feature-Home';
import CTASection from '../components/CTA-Home';
import TestimonialsSection from '../components/Testimonials';
import StatsSection from '../components/Stats';
import Tagline from '../components/Tagline';
// Home Component
const Home = () => {
  return (
    <>    
      <HeroSection />
      <FeaturesSection />
      <Tagline />
      <StatsSection />
      <CTASection />
      <TestimonialsSection />
    </>
  );
};

export default Home;