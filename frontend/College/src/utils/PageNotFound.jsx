import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaExclamationTriangle, FaArrowLeft, FaSearch } from 'react-icons/fa';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="page-not-found mt-5">
      <div className="error-container">
        {/* Animated 404 */}
        <div className="error-number">
          <span className="four">4</span>
          <span className="zero">0</span>
          <span className="four">4</span>
        </div>
        
        {/* Error Icon */}
        <div className="error-icon">
          <FaExclamationTriangle />
        </div>
        
        {/* Error Message */}
        <div className="error-content">
          <h1 className="error-title">Oops! Page Not Found</h1>
          <p className="error-description">
            The page you're looking for seems to have wandered off into the digital wilderness. 
            It might have been moved, deleted, or never existed in the first place.
          </p>
          
          {/* Suggestions */}
          <div className="error-suggestions">
            <div className="suggestion-item">
              <FaSearch className="suggestion-icon" />
              <span>Check if the URL is spelled correctly</span>
            </div>
            <div className="suggestion-item">
              <FaHome className="suggestion-icon" />
              <span>Go back to the homepage</span>
            </div>
          </div>
          
         
        </div>
        
        {/* Decorative Elements */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
