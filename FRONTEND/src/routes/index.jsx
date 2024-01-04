import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contact from '../pages/Contacts';


const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path='/Contacts' element={<Contact/>}/>
        {/* other routes */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
