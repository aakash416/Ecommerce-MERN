import React from 'react'
import { ContextStore } from '../Context/ContextStore';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { userData } = ContextStore();
    return (
        <div className='container mt-2' >
            <div className="card">
                <div className="card-header">Profile Details</div>
                <div className="card-body">
                    <h5 className="card-title">First Name: {userData?.firstName}</h5>
                    <h5 className="card-title">Last Name: {userData?.lastName}</h5>
                    <h5 className="card-title">Email: {userData?.email}</h5>
                    <h5 className="card-title">Phone Number: +91 {userData?.phone}</h5>
                    <h5 className="card-title">Address: {userData?.address}</h5>
                    <h5 className="card-title">Gender: {userData?.gender}</h5>
                    <h5 className="card-title">Role: {userData?.role}</h5>

                    <Link to={"/updatedprofile"} className="btn btn-primary">
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile