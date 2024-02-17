import React, { useContext } from 'react'
import { storeData } from '../Context/ContextStore';
import { Link } from 'react-router-dom';

const Profile = () => {
    const store = useContext(storeData);
    return (
        <div className='container mt-2' >
            <div className="card">
                <div className="card-header">Profile Details</div>
                <div className="card-body">
                    <h5 className="card-title">First Name: {store.userData?.firstName}</h5>
                    <h5 className="card-title">Last Name: {store.userData?.lastName}</h5>
                    <h5 className="card-title">Email: {store.userData?.email}</h5>
                    <h5 className="card-title">Phone Number: +91 {store.userData?.phone}</h5>
                    <h5 className="card-title">Address: {store.userData?.address}</h5>
                    <h5 className="card-title">Gender: {store.userData?.gender}</h5>
                    <h5 className="card-title">Role: {store.userData?.role}</h5>

                    <Link to={"/updatedprofile"} className="btn btn-primary">
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile