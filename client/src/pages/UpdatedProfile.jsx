import React, { useState } from 'react'
import { ContextStore } from '../Context/ContextStore';
import Input from '../components/Input';
import { updatedprofile } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdatedProfile = () => {
    const navgater = useNavigate();
    const { setUserData, userData, token, setToken } = ContextStore();
    const [data, setData] = useState({ ...userData, password: "", "token": token });

    const handleSubmit = (e) => {
        e.preventDefault()
        updatedprofile(data).then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.updated));
            setToken(res.data.token);
            setUserData(res.data.updated);
            toast.success(res.data.message);
            navgater("/profile");
        }).catch((err) => {
            toast.error(err.response.data.message);
        })


    }
    return (
        <div className='container mt-2'>
            <h1>Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <Input name={"First Name"} type={"text"} id={"firstName"} value={data.firstName} setInput={setData} required />
                <Input name={"Last Name"} type={"text"} id={"lastName"} value={data.lastName} setInput={setData} />
                <Input name={"email "} type={"email"} id={"email"} value={data.email} setInput={setData} required />
                <Input name={"Password"} type={"password"} id={"password"} value={data.password} setInput={setData} required />
                <Input name={"Phone Number"} type={"number"} id={"phone"} value={data.phone} setInput={setData} required />
                <label htmlFor="gender" className="form-label">
                    Gender
                </label>
                <select className="form-select" aria-label="Default select example" id='gender' value={data.gender} onChange={(e) => { setData({ ...data, gender: e.target.value }) }}>
                    <option value="">Select Gender</option>
                    <option value="Male" >Male</option>
                    <option value="Female">Female</option>
                    <option value="Other" >Other</option>
                </select>
                <Input name={"Image URL"} type={"text"} id={"image"} value={data.image} setInput={setData} />
                <Input name={"Address"} type={"text"} id={"address"} value={data.address} setInput={setData} />
                <button type="submit" className="btn btn-primary mt-3">
                    Updat Profile
                </button>
            </form>

        </div>
    )
}

export default UpdatedProfile