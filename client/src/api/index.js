import axios from "axios";

const API = "https://ecommerce-mern-pj58.onrender.com";
// const API = "http://localhost:8000";

axios.defaults.withCredentials = true;


axios.defaults.headers.common['Authorization'] = `Bearer${localStorage.getItem('token')}`;


export const register = async (data) => {
    return await axios.post(`${API}/api/users/register`, data);
}

export const login = async (data) => {
    return await axios.post(`${API}/api/users/login`, data);
}

export const updatedprofile = async (data) => {
    return await axios.put(`${API}/api/users/update`, data);
}



export const addProductToCart = async (data) => {
    return await axios.post(`${API}/api/cart/add`, data);
}

export const getAllProductInCart = async () => {
    return await axios.get(`${API}/api/cart/all`);
}

export const removeProductItemById = async (id) => {
    return await axios.delete(`${API}/api/cart/remove/${id}`);
}

export const decreamentProductInCart = async (id) => {
    return await axios.put(`${API}/api/cart/decreament`, { id });
}
export const increamentProductInCart = async (id) => {
    return await axios.put(`${API}/api/cart/increament`, { id });
}





export const getAllProduct = async () => {
    return await axios.get(`${API}/api/product/all`);
}

export const getProductById = async (id) => {
    return await axios.get(`${API}/api/product/${id}`);
}


export const updatedProductById = async (data) => {
    return await axios.put(`${API}/api/product/update`, data,)
}

export const addProduct = async (data) => {
    return await axios.post(`${API}/api/product/add`, data);
}

export const getAllProductSeller = async (id) => {
    return await axios.get(`${API}/api/product/seller/${id}`);
}

export const removeProductSellerById = async (id) => {
    return await axios.delete(`${API}/api/product/remove/${id}`)
}



export const getAllProductData = async () => {
    return await axios.get(`${API}/api/product/alldata`);
}





// Payments

export const createOrder = async (data) => {
    return await axios.post(`${API}/api/payment/creaate`, data);
}

export const getKey = async () => {
    return await axios.get(`${API}/api/payment/getKey`);
}


export const verifyPayment = async (data) => {
    return await axios.post(`${API}/api/payment/verify`, data);
}
