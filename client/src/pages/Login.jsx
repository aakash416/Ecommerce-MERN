import React, { useContext, useState } from 'react'
import Input from '../components/Input'
import { login } from '../service/AuthService'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CartData } from '../App';

const Login = () => {
    const navgater = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    const storeData = useContext(CartData);

    const handleSubmit = (e) => {
        e.preventDefault()
        login(data).then((res) => {
            toast.success(res.data.message);
            storeData.setIsLogin(true);
            navgater("/");
        }).catch((err) => {
            toast.error(err.response.data.message);
        })
    }
    return (
        <div className='container mt-5' >
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <Input name={"Email"} type={"email"} id={"email"} value={data.email} setInput={setData} />
                <Input name={"Password"} type={"password"} id={"password"} value={data.password} setInput={setData} />
                <button type="submit" className="btn btn-primary mt-3">
                    Login
                </button>
            </form>
        </div >
    )
}

export default Login