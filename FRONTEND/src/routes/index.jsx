import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contact from '../pages/Contacts';
import AboutPage from '../pages/AboutPage';
import MediaOwner from '../pages/MediaOwner';
const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/media-owners' element={<MediaOwner />} />
        
        {/* other routes */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
