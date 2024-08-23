import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session data here
    localStorage.removeItem('userToken');
    
    // Redirect to login page
    navigate('/');
  }, [navigate]);

  return null;
};

export default LogOut;
