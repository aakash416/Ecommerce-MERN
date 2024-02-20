import React, { useContext, useEffect, useState } from 'react'
import CartProduct from '../components/CartProduct';
import { storeData } from "../Context/ContextStore"
import { getAllProductInCart } from '../service/AuthService';


const Cart = () => {
    const store = useContext(storeData);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        getAllProductInCart(store.userData._id).then(res => {
            setCartData(res.data.productsInCart)
        }).catch(err => {
            console.log(err)
        })
    }, []);


    return (
        <div className='container mt-2 '>
            <table className="table">
                <thead>
                    <tr >
                        <th scope="col">S.N.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                        <th scope="col">Remove</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {
                        cartData.map((product, index) => {
                            return <CartProduct key={index} product={product} index={index} />
                        })
                    }
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Total Amount</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">${cartData.reduce((a, b) => a + b.price, 0)}</th>
                    </tr>

                </tbody>
            </table>


        </div>
    )
}

export default Cart