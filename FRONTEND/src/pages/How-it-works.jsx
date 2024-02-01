import React from 'react';
import { Link } from 'react-router-dom';
import Stepper from '../components/How It Works/Stepper'; 
import Testimonials from '../components/Home/Testimonials'; 
import Tag from '../components/How It Works/Tagline'; 
import HeroSection from '../components/How It Works/hero';
const Howitworks = () =>
{
    return(
        <>
        <HeroSection />
        <Stepper />
        <Tag Tag1 = "Your Partner" Tag2 = "in Growth and Success." Tag3 = "Where Success Stories Begin."/>
        <Testimonials />
        </>
    )
}

export default Howitworks;