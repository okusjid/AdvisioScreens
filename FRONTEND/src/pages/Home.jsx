import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

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


  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get_user_role/', {
          params: {
            clerk_user_id: user.id  // Assuming user.id is the clerk_user_id
          },
          withCredentials: false  // Include credentials for CORS
        });
        const { role } = response.data;
        setUserRole(role);
        console.log('User role:', role);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    if (isSignedIn) {
      fetchUserRole();
    }
  }, [isSignedIn, user]);

  useEffect(() => {
    if (isSignedIn && userRole) {
      if (userRole === 'admin') {
        console.log('Redirecting to admin page');
        navigate('/admin/user-management'); // Use navigate for navigation
      } 
      if(userRole === 'blocked'){
        console.log('Blocked User Page');
        navigate('/blocked');
      }
      else {
        console.log('Redirecting to user page');
        navigate('/'); // Redirect to user page for non-admin users
      }
    }
  }, [isSignedIn, userRole, navigate]);


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