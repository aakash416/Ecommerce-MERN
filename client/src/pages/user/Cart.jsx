import React, { useEffect } from 'react'
import CartProduct from '../../components/CartProduct';
import { ContextStore } from "../../Context/ContextStore"
import { getAllProductInCart } from '../../service/AuthService';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { userData, cart, setCart } = ContextStore();
    useEffect(() => {
        getAllProductInCart().then(res => {
            setCart(res.data.products)
        }).catch(err => {
            console.log(err)
        })
    }, [userData?._id, setCart]);


    return (
        <div className='container mt-2 '>
            {
                userData ? <>
                    {
                        cart?.length > 0 ? <>
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
                                        cart.map((item, index) => {
                                            return <CartProduct key={index} item={item} index={index} setCartData={setCart} />
                                        })
                                    }
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col">Total Amount</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col">${cart.reduce((a, b) => a + b.product.price, 0)}</th>
                                    </tr>

                                </tbody>
                            </table>
                        </> :
                            <div className='container d-flex justify-content-center align-items-center vh-100' >
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Your cart is empty!</h5>
                                        <p className="card-text">
                                            Add items to it now.
                                        </p>
                                        <Link to="/">
                                            <button type="button" className="btn btn-primary">Shop Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    }
                </> :

                    <div className='container d-flex justify-content-center align-items-center vh-100' >
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Missing Cart items?</h5>
                                <p className="card-text">
                                    Login to see the items you added previously
                                </p>
                                <Link to="/login">
                                    <button type="button" className="btn btn-primary">Login</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Cart