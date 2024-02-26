import React from 'react'
import { ContextStore } from '../../Context/ContextStore'

const Checkout = () => {
    const { checkoutProduct } = ContextStore();


    return (
        <div className='container mt-4'>
            <div className="card">
                <div className="card-header">Order Summary</div>
                {
                    checkoutProduct.map((product, index) => {
                        return (
                            <div className='card-body d-flex ' key={index}>
                                <img className='m-4' src={product?.image} alt={product?.name} style={{ width: "80px", height: "80px" }} />
                                <div className=''>
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">
                                        {product.description}
                                    </p>
                                    <h4 className="card-text">
                                        Price: {product.price}
                                    </h4>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <h4>Total Price: {checkoutProduct.reduce((a, b) => a + b.price, 0)}</h4>
            <button type="button" className="btn btn-warning">Pay Now</button>

        </div>
    )
}

export default Checkout