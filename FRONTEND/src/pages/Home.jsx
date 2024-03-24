import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Home/Hero-Home'; 
import FeaturesSection from '../components/Home/Feature-Home';
import CTASection from '../components/Home/CTA-Home';
import TestimonialsSection from '../components/Home/Testimonials';
import StatsSection from '../components/Home/Stats';
import Tagline from '../components/Home/Tagline';

// Clerk to Postgres
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,                  
  RedirectToSignIn
} from "@clerk/clerk-react";

// Home Component
const Home = () => {
  const { isSignedIn, user } = useUser();
  // if (!isSignedIn) {
  //   return <div>No User</div>;
  // }
  useEffect(() => {
    if (isSignedIn) {
      // Send user data to Django backend
      axios.post('http://localhost:8000/api/save_user_data/', {
        clerk_user_id: user.id,
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress
      })
      .then(response => {
        console.log('User data sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending user data:', error);
      });
    }
  }, [isSignedIn]);
  return (
    <>  
      {/* <div>
      Hello,
      <div>My ID is: {user.id}</div>
      <div>My name is: {user.fullName}</div>
      <div>Email: {user.primaryEmailAddress.emailAddress}</div>
      </div>   */}
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