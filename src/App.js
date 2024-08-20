// src/App.js

import React from 'react';
import { axioInstance } from './utilities/axiosService';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './Auth/Authentication';
// import MeasurementForm from './customer/home/MeasurementForm';
import Dashboard from './dashboard/Dashboard';
import Home from './customer/home/Home';
import { About } from './tailor/about/About';
import Psuit from './customer/home/pages/Psuit';
import Maincategorey from './layout/Maincategorey'
import AddDesignForm from './dashboard/design/AddDesignForm';
import ProtectedRoute from './components/protectedRoutes';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/add-category"  
        element={
          <ProtectedRoute>
            <Maincategorey />
          </ProtectedRoute>
        
        } />
        <Route path="/premium/suite" element={<Psuit />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={
      
        <ProtectedRoute>
            < Dashboard/>
        </ProtectedRoute>
        } />
        {/* <Route path="/measurements" element={<MeasurementForm />} /> */}
        <Route path="/add-design" 
        element={
          <ProtectedRoute>
            <AddDesignForm />
        </ProtectedRoute>
        
        }/>
        {/* Add additional routes as needed */}
        <Route path="/services" element={<div>Our Services Page</div>} />
        <Route path="/how-it-works" element={<div>How it Works Page</div>} />
        <Route path="/testimonial" element={<div>Testimonial Page</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
