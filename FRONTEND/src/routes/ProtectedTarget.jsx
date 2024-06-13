import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  if (role === 'blocked') {
    // Redirect to the blocked user page if the user's role is 'blocked'
    return <Navigate to="/blocked" replace />;
  }

  return children; // Render the children components if not blocked
};

export default ProtectedRoute;