import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api';

const ProductDetails = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams();
    getProductById(id).then(res => {
        setProduct(res.data.product)
    }).catch(err => {
        console.log(err)
    })

    return (
        <div className='container mt-5'>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <h2>Price {product.price}</h2>
            <h2>Rating {product.rating}</h2>
            <button className='btn btn-warning m-1'>Add to Cart</button>
            <button className='btn btn-success m-1'>Buy Now</button>
        </div>
    )
}

export default ProductDetails