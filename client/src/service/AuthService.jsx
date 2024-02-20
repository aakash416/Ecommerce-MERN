import axios from "axios";

const API = "http://localhost:8000";
axios.defaults.withCredentials = true;

const register = async (data) => {
    return await axios.post(`${API}/api/users/register`, data);
}

const login = async (data) => {
    return await axios.post(`${API}/api/users/login`, data);
}

export const updatedprofile = async (data) => {
    return await axios.put(`${API}/api/users/update`, data);
}



export const addProductToCart = async (data) => {
    return await axios.put(`${API}/api/cart/add`, data);
}

export const getAllProductInCart = async (id) => {
    return await axios.get(`${API}/api/cart/all/${id}`);
}


const addProduct = async (data) => {
    return await axios.post(`${API}/api/product/add`, data);
}

const getAllProduct = async () => {
    return await axios.get(`${API}/api/product/all`);
}

const getProductById = async (id) => {
    return await axios.get(`${API}/api/product/${id}`);
}





export { register, login, addProduct, getAllProduct, getProductById };