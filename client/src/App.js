import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { createContext, useState } from 'react';

export const CartData = createContext();

function App() {

  const [cart, setCart] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("user");


  return (
    <CartData.Provider value={{ cart, setCart, isLogin, setIsLogin, user, setUser }}>
      <BrowserRouter>
        <Header />
        <ToastContainer position="top-right" theme="light" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartData.Provider >

  );
}

export default App;
