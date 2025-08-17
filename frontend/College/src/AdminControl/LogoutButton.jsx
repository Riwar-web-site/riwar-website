import React from 'react'
import { useNavigate } from 'react-router-dom'
import authUtils from '../utils/auth'

function LogoutButton({ className = "", style = {}, children = "Logout" }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Call the logout utility function
            await authUtils.logoutWithBackend();
            
            // Redirect to login page
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
            // Still redirect even if there's an error
            navigate('/login');
        }
    };

    return (
        <button 
            onClick={handleLogout}
            className={`logout-btn ${className}`}
            style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s ease',
                ...style
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
        >
            {children}
        </button>
    );
}

export default LogoutButton
