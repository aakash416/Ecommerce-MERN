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
import { Store } from './Context/ContextStore'
import Profile from './pages/Profile';
import UpdatedProfile from './pages/UpdatedProfile';

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Store >

  );
}

export default App;
