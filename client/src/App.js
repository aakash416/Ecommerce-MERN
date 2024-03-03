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
import AddProduct from './pages/seller/AddProduct';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/user/Cart';
import { Store } from './Context/ContextStore'
import Profile from './pages/Profile';
import UpdatedProfile from './pages/UpdatedProfile';
import SeeAllProduct from './pages/seller/SeeAllProduct';
import UpdateProduct from './pages/seller/UpdateProduct';
import Checkout from './pages/user/Checkout';
import AllUsers from './pages/Dashboard/Pages/AllUsers';
import AllSeller from './pages/Dashboard/Pages/AllSeller';
import AllProducts from './pages/Dashboard/Pages/AllProducts';

function App() {
  return (
    <Store >
      <BrowserRouter>
        <Header />
        <ToastContainer position="top-right" theme="light" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updatedprofile" element={<UpdatedProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<AllUsers />} />
            <Route path="/dashboard/all-users" element={<AllUsers />} />
            <Route path="/dashboard/all-seller" element={<AllSeller />} />
            <Route path="/dashboard/all-products" element={<AllProducts />} />
          </Route>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/addNewProduct' element={<AddProduct />} />
          <Route path='/allProduct' element={<SeeAllProduct />} />
          <Route path='/updateproduct/:id' element={<UpdateProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Store >

  );
}

export default App;
