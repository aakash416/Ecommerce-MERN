import Razorpay from "razorpay";
import PaymentModel from "../Model/PaymentModel.js";
import crypto from 'crypto';

export const createOrder = async (req, res) => {
    try {

        const createPament = await PaymentModel.create({ amount: req.body.amount * 100, currency: "INR", userId: req.id });

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: createPament._id
        };
        const order = await instance.orders.create(options);

        createPament.orderId = order.id;
        await createPament.save();

        return res.json(order);


    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}



export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const payment = await PaymentModel.findOne({ orderId: razorpay_order_id });
        if (!payment) {
            return res.status(400).json({ message: "Payment not found" });
        }
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });

        const options = {
            razorpay_order_id: razorpay_order_id,
            razorpay_payment_id: razorpay_payment_id,
            razorpay_signature: razorpay_signature
        };

        const body = `${razorpay_order_id}|${razorpay_payment_id}`;

        // Generate the HMAC SHA256 hash of the body using the key secret
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest('hex');
        if (expectedSignature === razorpay_signature) {
            payment.paymentId = razorpay_payment_id;
            payment.signature = razorpay_signature;
            payment.status = "success";
            await payment.save();
            return res.status(200).json({ message: "Payment successfully verified" });
        } else {
            payment.status = "failed";
            await payment.save();
            return res.status(400).json({ message: "Payment verification failed" });
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}