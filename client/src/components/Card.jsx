import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addProductToCart } from '../api';
import { toast } from 'react-toastify';

const Card = ({ product }) => {
    const navagater = useNavigate();
    const addTocart = () => {
        addProductToCart({ productId: product._id }).then(res => {
            toast.success(res.data.message);
        }).catch(err => {
            toast.error(err.response.data.message);
        })
    }
    const checkout = () => {
        addProductToCart({ productId: product._id }).then(res => {
            toast.success(res.data.message);
        }).catch(err => {
            toast.error(err.response.data.message);
        })
        navagater("/checkout")
    }

    return (
        <div className="card m-2 p-2" style={{ width: "18rem" }}>
            <Link to={`/product/${product._id}`}>
                <img src={product.image} className="card-img-top " alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                        {product.description}
                    </p>
                </div>
            </Link>
            <button className='btn btn-warning m-1' onClick={addTocart}>Add to Cart</button>
            <button className='btn btn-success m-1' onClick={checkout}>Buy Now</button>

        </div>
    )
}

export default Card