import React, { useEffect, useState } from 'react'
import ProductForm from '../../components/ProductForm'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, updatedProductById } from '../../api'
import { toast } from 'react-toastify'

const UpdateProduct = () => {
    const navagater = useNavigate();
    const [product, setProduct] = useState([])
    const { id } = useParams();
    useEffect(() => {
        getProductById(id).then(res => {
            setProduct(res.data.product)
        }).catch(err => {
            console.log(err)
        })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        updatedProductById(product).then(res => {
            toast.success(res.data.message)
            navagater("/allProduct");
        }).catch(err => {
            console.log(err)
        })

    }


    return (
        <ProductForm heading={"Update Product"} buttonName={"Update Product"} product={product} setProduct={setProduct} handleSubmit={handleSubmit} />
    )
}

export default UpdateProduct