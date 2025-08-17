import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import checkServerStatus from '../utils/serverStatus'
import './Login.css' // We'll create this for styling

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [serverStatus, setServerStatus] = useState(null); // null = checking, true = online, false = offline
    const navigate = useNavigate();

    // Check server status on component mount
    useEffect(() => {
        const checkStatus = async () => {
            const isOnline = await checkServerStatus();
            setServerStatus(isOnline);
        };
        checkStatus();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Create an AbortController for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        try {
            console.log('Attempting to login with:', formData.email); // Debug log
            
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies for session management
                signal: controller.signal, // Add timeout signal
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            clearTimeout(timeoutId); // Clear timeout if request completes

            console.log('Response status:', response.status); // Debug log

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Response data:', data); // Debug log

            if (data.success) {
                // Store user info in localStorage if needed
                localStorage.setItem('user', JSON.stringify({
                    email: data.email,
                    name: data.name
                }));
                
                // Store authentication token for protected routes
                localStorage.setItem('token', data.token || 'authenticated');
                
                console.log('Login successful, redirecting...'); // Debug log
                // Redirect to dashboard or choose page
                navigate('/choose'); // Navigate to choose component
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            clearTimeout(timeoutId); // Clear timeout on error
            console.error('Login error:', err); // Debug log
            
            if (err.name === 'AbortError') {
                setError('Request timed out. Please check if the server is running.');
            } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
                setError('Cannot connect to server. Please ensure the backend is running on http://localhost:8080');
            } else if (err.message.includes('HTTP error')) {
                setError(`Server error: ${err.message}`);
            } else {
                setError('Network error. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Riwar College Login</h2>
                    <p className='text-center'>Please sign in to your account</p>
                    
                    {/* Server Status Indicator */}
                    <div className="server-status">
                        {serverStatus === null && (
                            <span className="status-checking">🔄 Checking server...</span>
                        )}
                        {serverStatus === true && (
                            <span className="status-online">🟢 Server online</span>
                        )}
                        {serverStatus === false && (
                            <span className="status-offline">🔴 Server offline - Please start the backend</span>
                        )}
                    </div>
                </div>
                
                <form onSubmit={handleSubmit} className="login-form">
                    {error && (
                        <div className="error-message">
                            {error}
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
                            placeholder="Enter your password"
                            className="form-input"
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading || !formData.email || !formData.password || serverStatus === false}
                        className="login-button"
                    >
                        {loading ? 'Signing in...' : serverStatus === false ? 'Server Offline' : 'Sign In'}
                    </button>
                </form>

              
            </div>
        </div>
    )
}

export default Login
