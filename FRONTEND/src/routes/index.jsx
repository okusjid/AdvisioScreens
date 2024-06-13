import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignedIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Home from '../pages/Home';
import Footer from '../components/Header-Footer/Footer';
import Header from '../components/Header-Footer/Header';
import Contact from '../pages/Contact';
import AboutPage from '../pages/AboutPage';
import MediaOwner from '../pages/MediaOwner';
import ErrorPage from '../pages/ErrorPage';
import Howitworks from '../pages/How-it-works'; 
import Cost from "../components/Cost/Cost";
import AdminLayout from '../pages/Admin/Admin';
import ErrorPage1 from '../pages/Admin/Errorpage';
import Analytics from '../pages/Analytics'; 
import FeedbackForm from '../pages/FeedbackForm';
import UserManagementPage from '../components/Admin/UserManagementPage';
import AdminContactMessages from '../components/Admin/AdminContactMessages';
import AdminHomePage from '../components/Admin/Admin-home';
import AdManagement from '../components/Admin/AdManagment';
import Gallery from "../components/gallery/Gallery";
import Dashboard1 from '../components/Dashboard/Dashboard1';
import Location from '../pages/Location';
import AdminMediaLibrary from '../components/Admin/Admin-MediaLibrary';
import FeedbackCollection from '../components/Admin/Admin-Feedback';
// import AdminGamification from '../components/Admin/Admin-Gamification';
import BlockedUserPage from '../pages/BlockedUser';

// get role
import { useUserRole } from './UserRole';

const DefaultLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};


const Routing = () => {
  const role = useUserRole();
  console.log("MeraRole",role);



  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />
        <Route path="/about" element={<DefaultLayout><AboutPage /></DefaultLayout>} />
        <Route path="/media-owners" element={<DefaultLayout><MediaOwner /></DefaultLayout>}/>
        <Route path="/error" element={<DefaultLayout><ErrorPage /></DefaultLayout>}/>
        <Route path='/howitworks' element={<DefaultLayout><Howitworks /></DefaultLayout>} />
        <Route path='/gallery' element={<DefaultLayout><Gallery /></DefaultLayout>} />
        <Route path="/cost" element={<DefaultLayout><Cost /></DefaultLayout>} />
        <Route path="/Dashboard" element={<DefaultLayout><Dashboard1 /></DefaultLayout>} />
        <Route path="/dashboard/analytics" element={<DefaultLayout><Analytics/></DefaultLayout>} />
        <Route path="/dashboard/feedback-form" element={<DefaultLayout><FeedbackForm /></DefaultLayout>} />
        <Route path="/locations" element={<DefaultLayout><Location /></DefaultLayout>} />

        
        <Route path='/blocked' element={<BlockedUserPage />} />
        
        
        
        <Route path="/admin" element={<SignedIn><AdminLayout /></SignedIn>}>          
          <Route path="" element={<AdminHomePage />} />
          <Route path="contact-messages" element={<AdminContactMessages />} />
          <Route path='user-management' element={<UserManagementPage />} />
          <Route path='ad-management' element={<AdManagement />} />
          <Route path="media-library" element={<AdminMediaLibrary />} />
          <Route path='feedback-collection' element={<FeedbackCollection />} />
          {/* <Route path="gamification" element={<AdminGamification />} /> */}
          <Route path="*" element={<ErrorPage1 />} />

          
          {/* Add other admin nested routes here */}
        </Route>
        <Route path="*" element={<DefaultLayout><ErrorPage /></DefaultLayout>} />
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
    </Router>
  );
};

export default Routing;
