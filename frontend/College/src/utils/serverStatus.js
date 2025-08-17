// Utility function to check if backend server is running
export const checkServerStatus = async () => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout for health check
        
        const response = await fetch('http://localhost:8080/auth/show', {
            method: 'GET',
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        return response.ok;
    } catch (error) {
        console.error('Server status check failed:', error);
        return false;
    }
};

export default checkServerStatus;
