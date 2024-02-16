import React, { useContext } from 'react'
import CartProduct from '../components/CartProduct';
import { CartData } from "../App"


const Cart = () => {
    const cart = useContext(CartData);
    return (
        <div className='container mt-2 '>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.N.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {
                        cart.cart.map((product, index) => {
                            return <CartProduct key={index} product={product} index={index} />
                        })
                    }
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Total Amount</th>
                        <th scope="col">${cart.cart.reduce((a, b) => a + b.price, 0)}</th>
                    </tr>

                </tbody>
            </table>


        </div>
    )
}

export default Cart