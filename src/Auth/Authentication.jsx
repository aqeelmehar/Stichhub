import React, { useState,useLayoutEffect } from 'react';
import LoginForm from './Login';
import RegisterForm from './Register';
import lock from '../img/login.png';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Authentication = () => {
  const [isRegistering, setIsRegistering] = useState(false);

   const navigate = useNavigate();

  useLayoutEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      navigate(-1);
    }
  },[])
  return (
    <>
    
    <div className="auth-container">
     
      <div className="auth-wrapper">
        <div className="form-section">
          {isRegistering ? (
            <RegisterForm />
          ) : (
            <LoginForm />
          )}
          <button onClick={() => setIsRegistering(!isRegistering)} className="toggle-button">
            {isRegistering ? 'Switch to Login' : 'Switch to Register'}
          </button>
        </div>
        <div className="image-section">
          <img src={lock} alt="Illustration" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Authentication;
