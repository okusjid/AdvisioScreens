import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignedIn } from '@clerk/clerk-react';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Footer from '../components/Header-Footer/Footer';
import Header from '../components/Header-Footer/Header';
import Contact from '../pages/Contact';
import AboutPage from '../pages/AboutPage';
import MediaOwner from '../pages/MediaOwner';
import ErrorPage from '../pages/ErrorPage';
import Howitworks from '../pages/How-it-works'; 

const Routing = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/media-owners" element={<MediaOwner />}/>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path='/howitworks' element={<Howitworks />}/>
            {/* Protect this route or any other routes that require authentication */}
            {/* <Route 
              path='/media-owners' 
              element={
                <SignedIn>
                  <MediaOwner />
                </SignedIn>
              } 
            /> */}
            {/* other routes */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default Routing;
