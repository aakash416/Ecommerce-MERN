import React, { useState } from 'react'
import Input from '../components/Input'
import { login } from '../api'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ContextStore } from "../Context/ContextStore"

const Login = () => {
    const navgater = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    const { setUserData, setToken } = ContextStore();

    const handleSubmit = (e) => {
        e.preventDefault()
        login(data).then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.existingProfile));
            setUserData(res.data.existingProfile);
            setToken(res.data.token);
            toast.success(res.data.message);
            console.log(res.data.existingProfile.role);
            if (res.data.existingProfile.role === "admin") {
                return navgater("/dashboard");
            }
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