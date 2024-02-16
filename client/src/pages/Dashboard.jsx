import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>

            <div>
                <button > <Link to={"/add"}>Add New Product</Link> </button>
                <button>See ALl Product</button>
                <button>Order Status</button>
                <button>Delivered</button>
            </div>
        </div>
    )
}

export default Dashboard