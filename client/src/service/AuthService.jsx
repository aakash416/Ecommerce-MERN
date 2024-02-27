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
    return await axios.put(`${API}/api/users/update`, data, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
}



export const addProductToCart = async (data) => {
    return await axios.post(`${API}/api/cart/add`, data, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
}

export const getAllProductInCart = async () => {
    return await axios.get(`${API}/api/cart/all`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
}

export const removeProductItemById = async (id) => {
    return await axios.delete(`${API}/api/cart/remove/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
}

export const decreamentProductInCart = async (id) => {
    return await axios.put(`${API}/api/cart/decreament`, { id }, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
}
export const increamentProductInCart = async (id) => {
    return await axios.put(`${API}/api/cart/increament`, { id }, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
}





const getAllProduct = async () => {
    return await axios.get(`${API}/api/product/all`);
}

const getProductById = async (id) => {
    return await axios.get(`${API}/api/product/${id}`);
}


export const updatedProductById = async (data) => {
    return await axios.put(`${API}/api/product/update`, data, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
}

export const addProduct = async (data) => {
    return await axios.post(`${API}/api/product/add`, data, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
}

export const getAllProductSeller = async (id) => {
    return await axios.get(`${API}/api/product/seller/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
}

export const removeProductSellerById = async (id) => {
    return await axios.delete(`${API}/api/product/remove/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
}



export const getAllProductData = async () => {
    return await axios.get(`${API}/api/product/alldata`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
}

export { register, login, getAllProduct, getProductById };