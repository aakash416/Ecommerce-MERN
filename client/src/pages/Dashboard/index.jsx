import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className='container mt-5'>

            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="true" to={"/dashboard/all-users"}>
                                All Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="true" to={"/dashboard/all-seller"}>
                                All Seller
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="true" to={"/dashboard/all-products"}>
                                All Products
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />

        </div>
    )
}

export default Dashboard