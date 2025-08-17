import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear messages when user starts typing
        if (error) setError('');
        if (success) setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: formData.email,
                    pwd: formData.password // Backend expects 'pwd' field
                })
            });

            const data = await response.text(); // Backend returns plain text

            if (response.ok) {
                setSuccess(data);
                // Clear form
                setFormData({ email: '', password: '', confirmPassword: '' });
                // Redirect to login after 2 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setError(data || 'Registration failed');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h2>Create Account</h2>
                    <p>Join Riwar College today</p>
                </div>
                
                <form onSubmit={handleSubmit} className="register-form">
                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}
                    
                    {success && (
                        <div className="success-message">
                            {success}
                        </div>
                    )}
                    
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            placeholder="Create a password"
                            className="form-input"
                            minLength="6"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                            placeholder="Confirm your password"
                            className="form-input"
                            minLength="6"
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading || !formData.email || !formData.password || !formData.confirmPassword}
                        className="register-button"
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                <div className="register-footer">
                    <p>Already have an account? <a href="/login">Sign in</a></p>
                </div>
            </div>
        </div>
    )
}

export default Register
