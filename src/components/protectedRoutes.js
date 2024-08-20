import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
// Example of an authentication check function
const isAuthenticated = () => {

    const authToken = !!localStorage.getItem('token'); // Example using localStorage
  // Replace this with your actual authentication logic

   return authToken;

}

const ProtectedRoute = ({ children }) => {
    


  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/authentication" replace />;
  } 
  const decoded = jwtDecode(localStorage.getItem('token'));
 
    return children;
  

  // Render the child components if authenticated
  
};

export default ProtectedRoute;