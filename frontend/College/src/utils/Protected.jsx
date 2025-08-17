
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Protected() {
  // Example: check for token in localStorage
  const isAuthenticated = !!localStorage.getItem('token');

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the child route
  return <Outlet />;
}

export default Protected;
