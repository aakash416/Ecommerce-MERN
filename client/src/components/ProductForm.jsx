import React from 'react'
import Input from './Input'
const ProductForm = ({ product, setProduct, handleSubmit, heading, buttonName }) => {
    return (
        <div className='container mt-2'>

            <h4>{heading}</h4>
            <form onSubmit={handleSubmit}>
                <Input name="Product Name" type="text" id="name" value={product?.name} setInput={setProduct} />
                <Input name="price" type="text" id="price" value={product?.price} setInput={setProduct} />
                <Input name="description" type="text" id="description" value={product?.description} setInput={setProduct} />
                <Input name="image" type="text" id="image" value={product?.image} setInput={setProduct} />
                <Input name="category" type="text" id="category" value={product?.category} setInput={setProduct} />
                <Input name="Count In Stock" type="number" id="countInStock" value={product?.countInStock} setInput={setProduct} />
                <button type="submit" className="btn btn-primary mt-3">
                    {buttonName}
                </button>
            </form>
        </div>
    )
}

export default ProductForm