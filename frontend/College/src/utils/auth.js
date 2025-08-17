// Simple utility functions for authentication
export const authUtils = {
    // Save user data after login
    saveUser: (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
    },

    // Get current user data
    getUser: () => {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : null;
    },

    // Check if user is logged in
    isLoggedIn: () => {
        const user = authUtils.getUser();
        return user !== null;
    },

    // Logout user
    logout: () => {
        localStorage.removeItem('user');
        // You can also clear other session-related data here
        localStorage.removeItem('token'); // if you're using tokens
        sessionStorage.clear(); // clear session storage
    },

    // Get user email
    getUserEmail: () => {
        const user = authUtils.getUser();
        return user ? user.email : null;
    },

    // Logout with backend call
    logoutWithBackend: async () => {
        try {
            const response = await fetch('http://localhost:8080/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });
            
            // Always clear local storage regardless of backend response
            authUtils.logout();
            return response.ok;
        } catch (error) {
            console.error('Backend logout error:', error);
            // Still clear local storage even if backend call fails
            authUtils.logout();
            return false;
        }
    }
};

export default authUtils;
