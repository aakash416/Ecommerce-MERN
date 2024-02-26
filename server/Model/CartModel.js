import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
        min: 1
    }
},
    {
        timestamps: true
    })


const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profiles",
        required: true
    },
    items: [cartItemSchema],

},
    {
        timestamps: true
    })

const CartModel = mongoose.model("Cart", cartSchema);

export default CartModel;