import Profile from "../Model/profileModel.js";
import jwt from "jsonwebtoken";
import Product from "../Model/productModel.js";


export const addProductToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const existingProfile = await Profile.findOne({ _id: req.id });
        if (!existingProfile) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign({ _id: existingProfile._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const updated = await Profile.findByIdAndUpdate(req.id, {
            $push: {
                cart: productId
            }
        });
        return res.status(200).json({ token, updated, message: "Product added to cart successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getAllProductInCart = async (req, res) => {
    try {
        const existingProfile = await Profile.findOne({ _id: req.params.id });
        if (!existingProfile) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const productIds = existingProfile.cart;
        const productsInCart = await Product.find({ _id: { $in: productIds } });
        const token = jwt.sign({ _id: existingProfile._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.status(200).json({ token, productsInCart, message: "Products retrieved successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }

}