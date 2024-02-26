import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    countInStock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
    },
    numReviews: {
        type: Number,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profiles",
        required: true
    }

},
    {
        timestamps: true
    })

const Product = mongoose.model("Product", productSchema);

export default Product;