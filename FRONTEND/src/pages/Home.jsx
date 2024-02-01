import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Home/Hero-Home'; 
import FeaturesSection from '../components/Home/Feature-Home';
import CTASection from '../components/Home/CTA-Home';
import TestimonialsSection from '../components/Home/Testimonials';
import StatsSection from '../components/Home/Stats';
import Tagline from '../components/Home/Tagline';
// Home Component
const Home = () => {
  return (
    <>    
      <HeroSection />
      <FeaturesSection />
      <Tagline Tag1="Unleashing Potential" Tag2="One Business at a Time." Tag3="Transforming Visions into Victories."/>
      <StatsSection />
      <CTASection />
      <TestimonialsSection />
    </>
  );
};

export default Home;