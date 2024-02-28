import mongoose from "mongoose";

const paymentModeSchema = new mongoose.Schema({
    orderId: {
        type: String,
    },
    paymentId: {
        type: String,
    },
    signature: {
        type: String,
    },
    status: { // Payment status (e.g., 'pending', 'failed', 'success')
        type: String,
        required: true,
        default: 'pending'
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profiles',
        required: true
    }
},
    {
        timestamps: true
    });

const PaymentModel = mongoose.model('Payment', paymentModeSchema);
export default PaymentModel;
