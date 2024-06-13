import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignedIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import ProtectedRoute from './ProtectedTarget';

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
  console.log("MeraRole", role);



  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<ProtectedRoute role={role}><DefaultLayout><Home /></DefaultLayout></ProtectedRoute>} />
        <Route path='/howitworks' element={<ProtectedRoute role={role}><DefaultLayout><Howitworks /></DefaultLayout></ProtectedRoute>} /> 
        <Route path="/contact" element={<ProtectedRoute role={role}><DefaultLayout><Contact /></DefaultLayout> </ProtectedRoute>}  />
        <Route path="/about" element={<ProtectedRoute role={role}><DefaultLayout><AboutPage /></DefaultLayout> </ProtectedRoute>} />
        <Route path="/media-owners" element={<ProtectedRoute role={role}><DefaultLayout><MediaOwner /></DefaultLayout> </ProtectedRoute>} />
        <Route path="/error" element={<ProtectedRoute role={role}><DefaultLayout><ErrorPage /></DefaultLayout></ProtectedRoute>} />
        <Route path='/gallery' element={<ProtectedRoute role={role}><DefaultLayout><Gallery /></DefaultLayout></ProtectedRoute>} />
        <Route path="/cost" element={<ProtectedRoute role={role}><DefaultLayout><Cost /></DefaultLayout></ProtectedRoute>} />
        <Route path="/Dashboard" element={<ProtectedRoute role={role}><DefaultLayout><Dashboard1 /></DefaultLayout></ProtectedRoute>} />
        <Route path="/dashboard/analytics" element={<ProtectedRoute role={role}><DefaultLayout><Analytics /></DefaultLayout></ProtectedRoute>} />
        <Route path="/dashboard/feedback-form" element={<ProtectedRoute role={role}><DefaultLayout><FeedbackForm /></DefaultLayout></ProtectedRoute>} />
        <Route path="/locations" element={<ProtectedRoute role={role}><DefaultLayout><Location /></DefaultLayout></ProtectedRoute>} />


        {role === 'blocked' &&
          <Route path='/blocked' element={<BlockedUserPage />} />
        }


        <Route path="/admin" element={<ProtectedRoute role={role}><SignedIn><AdminLayout /></SignedIn></ProtectedRoute>}>
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
