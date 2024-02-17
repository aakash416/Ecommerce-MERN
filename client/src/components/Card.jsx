import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { storeData } from "../Context/ContextStore"

const Card = ({ product }) => {
    const cart = useContext(storeData); //{cart,setCart}

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
            <button className='btn btn-warning m-1' onClick={() => cart.setCart([...cart.cart, product])}>Add to Cart</button>
            <button className='btn btn-success m-1'>Buy Now</button>
        </div>
    )
}

export default Card