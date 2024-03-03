import React from 'react'
import { toast } from 'react-toastify'
import { removeProductSellerById } from '../api'
import { Link } from 'react-router-dom'

const ProductList = ({ product, index, setProudct }) => {

    const handleDelete = (id) => {
        removeProductSellerById(id).then(res => {
            setProudct(res.data?.products)
            toast.success("Product Removed Successfully")
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <tr >
            <th scope="col">{index + 1}</th>
            <th scope="col"><img src={product?.image} alt={product?.name} style={{ width: "50px", height: "50px" }} /></th>
            <th scope="col">{product?.name}</th>
            <th scope="col">{product?.description}</th>
            <th scope="col">{product?.category}</th>
            <th scope="col">{product?.countInStock}</th>
            <th scope="col">{product?.price}</th>
            <th scope="col">
                <Link to={`/updateproduct/${product?._id}`}> <button type="button" className="btn btn-info" >Edit</button></Link>
            </th>
            <th scope="col">
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(product?._id)}>Remove</button>
            </th>
        </tr>
    )
}

export default ProductList