import axios from 'axios';

// Set base URL for all requests
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Set the AUTH token for any request
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});



const API_URL = process.env.REACT_APP_BACKEND_URL;

// Function to register a new user
export const register = async (userData) => {
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error('Could not complete the registration');
    }

    const data = await response.json();
    return data;
};

// Function to login a user
export const login = async (userData) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error('Could not complete the login');
    }

    const data = await response.json();

    // Assuming the backend returns a token on successful login,
    // you can store it in localStorage or sessionStorage
    if (data.token) {
        localStorage.setItem('user', JSON.stringify(data));
    }

    return data;
};

// Function to logout the user
export const logout = () => {
    localStorage.removeItem('user');
};

// Helper function to get current user data from local storage
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};
