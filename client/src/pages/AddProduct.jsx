import React, { useState } from 'react'
import Input from '../components/Input';
import { addProduct } from '../service/AuthService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navagater = useNavigate();
    const [product, setProduct] = useState({ name: "", price: "", description: "", image: "", category: "", countInStock: "", rating: "", numReviews: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product).then(res => {
            toast.success(res.data.message)
            navagater("/dashboard");
        }).catch(err => {
            toast.error(err.response.data.message)
        })

    }
    return (
        <div className='container mt-2'>

            <h4>Add New Product</h4>
            <form onSubmit={handleSubmit}>
                <Input name="name" type="text" id="name" value={product.name} setInput={setProduct} />
                <Input name="price" type="text" id="price" value={product.price} setInput={setProduct} />
                <Input name="description" type="text" id="description" value={product.description} setInput={setProduct} />
                <Input name="image" type="text" id="image" value={product.image} setInput={setProduct} />
                <Input name="category" type="text" id="category" value={product.category} setInput={setProduct} />
                <Input name="countInStock" type="number" id="countInStock" value={product.countInStock} setInput={setProduct} />
                <Input name="rating" type="number" id="rating" value={product.rating} setInput={setProduct} />
                <Input name="numReviews" type="number" id="numReviews" value={product.numReviews} setInput={setProduct} />
                <button type="submit" className="btn btn-primary mt-3">
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProduct