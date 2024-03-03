import React, { useEffect } from 'react'
import { ContextStore } from '../../Context/ContextStore'
import { getAllProductInCart, createOrder, getKey, verifyPayment } from '../../api';
import { toast } from 'react-toastify';
const Checkout = () => {
    const { userData, cart, setCart } = ContextStore();
    useEffect(() => {
        getAllProductInCart().then(res => {
            setCart(res.data.products)
        }).catch(err => {
            console.log(err)
        })
    }, [setCart]);
    const totalAmount = cart?.reduce((a, b) => a + (b.product.price * b.quantity), 0)

    const handlePayNow = async () => {

        const { data: { id, amount } } = await createOrder({ amount: totalAmount });

        const { data: { key_id } } = await getKey();

        const options = {
            "key": key_id,
            "amount": amount,
            "currency": "INR",
            "name": "Ecommerce",
            "description": "E-commerce is the online buying and selling of goods and services, facilitated by the transfer of money and information over the Internet.",
            "image": "https://cdn-icons-png.flaticon.com/512/8539/8539259.png",
            "order_id": id,
            "handler": function (response) {
                verifyPayment(response).then(res => {
                    toast.success(res.data.message);
                }).catch(err => {
                    toast.error(err.response.data.message);
                })
            },
            "prefill": {
                "name": userData.firstName,
                "email": userData.email,
                "contact": userData.phone
            },
            "notes": {
                "address": "E-commerce Corporate Office Pvt Ltd"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        const result = new window.Razorpay(options);
        result.open();
    }

    return (
        <div className='container mt-4'>
            <div className="card">
                <div className="card-header">Order Summary</div>
                {
                    cart.map((item, index) => {
                        const { product, quantity } = item;
                        return (
                            <div className='card-body d-flex ' key={index}>
                                <img className='m-4' src={product?.image} alt={product?.name} style={{ width: "80px", height: "80px" }} />
                                <div className=''>
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">
                                        {product.description}
                                    </p>
                                    <p>Quantity : {quantity}</p>
                                    <h4 className="card-text">
                                        Price: {quantity * product.price}
                                    </h4>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <h4>Total Price: {totalAmount}</h4>
            <button type="button" className="btn btn-warning" onClick={handlePayNow}>Pay Now</button>

        </div>
    )
}

export default Checkout

