/**
 * Imports Axios for making API requests.
 */
import axios from "axios";

/**
 * Configures the base URL for making API requests.
 * Defines a production and development URL.
 */
export const API_BASE_URL = "https://ecommerce-mern-pj58.onrender.com/api";
// export const API_BASE_URL = "http://localhost:8000/api";

/**
 * Creates an Axios instance with a predefined configuration.
 * Sets the base URL, enables credentials, and adds the authorization header.
 */
export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        Authorization: `Bearer${localStorage.getItem("token")}`,
    },
});
