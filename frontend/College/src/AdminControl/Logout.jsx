import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authUtils from '../utils/auth'
import './Logout.css'

function Logout() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setLoading(true);
        
        try {
            // Call backend logout endpoint
            const response = await fetch('http://localhost:8080/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });

            const data = await response.json();

            if (data.success) {
                // Clear local storage
                authUtils.logout();
                
                // Show success message briefly then redirect
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                // Even if backend logout fails, clear local storage and redirect
                authUtils.logout();
                navigate('/login');
            }
        } catch (error) {
            console.error('Logout error:', error);
            // Clear local storage anyway and redirect
            authUtils.logout();
            navigate('/login');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate(-1); // Go back to previous page
    };

    // Check if user is logged in
    const user = authUtils.getUser();
    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <div className="logout-container">
            <div className="logout-card">
                <div className="logout-header">
                    <h2>Confirm Logout</h2>
                    <p>Are you sure you want to sign out of your account?</p>
                    {user && (
                        <div className="user-info">
                            <span>Logged in as: <strong>{user.email}</strong></span>
                        </div>
                    )}
                </div>
                
                <div className="logout-actions">
                    <button 
                        onClick={handleLogout}
                        disabled={loading}
                        className="logout-button confirm"
                    >
                        {loading ? 'Signing Out...' : 'Yes, Sign Out'}
                    </button>
                    
                    <button 
                        onClick={handleCancel}
                        disabled={loading}
                        className="logout-button cancel"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Logout
