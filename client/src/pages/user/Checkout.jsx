import React, { useEffect } from 'react'
import { ContextStore } from '../../Context/ContextStore'
import { getAllProductInCart, createOrder, verifyPayment } from '../../service/AuthService';
import { toast } from 'react-toastify';
// import Razorpay from 'razorpay';

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

    // Load the Razorpay script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handlePayNow = async () => {
        createOrder({ amount: totalAmount }).then(res => {
            
            const options = {
                "key": "rzp_test_B38LGrNB4kp4G9", // Enter the Key ID generated from the Dashboard
                "amount": totalAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response) {
                    verifyPayment(response).then(res => {
                        toast.success(res.data.message);
                    }).catch(err => {
                        toast.error(err.response.data.message);
                    })
                },
                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

        }).catch(err => {
            console.log(err)
        })
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


