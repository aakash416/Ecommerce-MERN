import React, { useEffect, useState } from 'react'
import { addProduct } from '../../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ContextStore } from '../../Context/ContextStore';
import ProductForm from '../../components/ProductForm';

const AddProduct = () => {
    const navagater = useNavigate();
    const { userData } = ContextStore();

    useEffect(() => {
        if (userData?.role !== "seller") {
            navagater("/login");
        }
    }, [userData?.role, navagater])

    const [product, setProduct] = useState({ name: "", price: "", description: "", image: "", category: "", countInStock: "", rating: "", numReviews: "", seller: userData?._id });
    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product).then(res => {
            toast.success(res.data.message)
            navagater("/allProduct");
        }).catch(err => {
            toast.error(err.response.data.message)
        })

    }
    return (
        <ProductForm product={product} setProduct={setProduct} handleSubmit={handleSubmit} heading="Add New Product" buttonName="Add Product" />
    )
}

export default AddProduct