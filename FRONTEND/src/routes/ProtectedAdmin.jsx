import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtected = ({ children, role }) => {
  if (role !== 'admin') {
    // Redirect to the blocked user page if the user's role is 'blocked'
    return <Navigate to="/" replace />;
  }

  return children; // Render the children components if not blocked
};

export default AdminProtected;