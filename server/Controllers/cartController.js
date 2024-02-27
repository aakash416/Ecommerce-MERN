import Profile from "../Model/profileModel.js";
import jwt from "jsonwebtoken";
import Product from "../Model/productModel.js";
import CartModel from "../Model/CartModel.js";


export const addProductToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const user = await CartModel.findOne({ userId: req.id });
        if (!user) {
            const newCart = await CartModel.create({
                userId: req.id,
                items: [{
                    productId,
                    quantity: 1
                }]
            });
            return res.status(200).json({ message: "Product added to cart successfully" });
        }

        const existingCart = user;
        const existingCartItems = existingCart.items;

        const index = existingCartItems.findIndex(item => item.productId.toString() === productId);
        if (index !== -1) {
            existingCartItems[index].quantity += 1;
            await existingCart.save();
            return res.status(200).json({ message: "Product added to cart successfully" });
        }

        existingCart.items.push({ productId, quantity: 1 });
        await existingCart.save();
        return res.status(200).json({ message: "Product added to cart successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}



export const getAllProductInCart = async (req, res) => {
    try {
        const user = await CartModel.findOne({ userId: req.id });
        if (!user) {
            return res.status(200).json({ message: "Cart is empty" });
        }
        const existingCartItems = user.items;

        const productsPromises = existingCartItems.map(async item => {
            const product = await Product.findById({ _id: item.productId });
            return {
                product: product,
                quantity: item.quantity
            }
        });
        const products = await Promise.all(productsPromises);
        return res.status(200).json({ products, message: "Products retrieved successfully" });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}


export const removeProductItemById = async (req, res) => {
    try {
        const user = await CartModel.findOne({ userId: req.id });
        if (!user) {
            return res.status(200).json({ message: "Cart is empty" });
        }

        const existingCartItems = user.items;
        const index = existingCartItems.findIndex(item => item.productId.toString() === req.params.id);
        if (index === -1) {
            return res.status(200).json({ message: "Product not found in cart" });
        }
        existingCartItems.splice(index, 1);
        await user.save();

        const productsPromises = existingCartItems.map(async item => {
            const product = await Product.findById({ _id: item.productId });
            return {
                product: product,
                quantity: item.quantity
            }
        });
        const products = await Promise.all(productsPromises);
        return res.status(200).json({ products, message: "Products retrieved successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }


}



export const decreamentProductInCart = async (req, res) => {
    try {
        const user = await CartModel.findOne({ userId: req.id });
        if (!user) {
            return res.status(200).json({ message: "Cart is empty" });
        }

        const existingCartItems = user.items;

        const index = existingCartItems.findIndex(item => item.productId.toString() === req.body.id);
        if (index === -1) {
            return res.status(200).json({ message: "Product not found in cart" });
        }

        if (existingCartItems[index].quantity === 1) {
            existingCartItems.splice(index, 1);
            await user.save();

            const productsPromises = existingCartItems.map(async item => {
                const product = await Product.findById({ _id: item.productId });
                return {
                    product: product,
                    quantity: item.quantity
                }
            });
            const products = await Promise.all(productsPromises);
            return res.status(200).json({ products, message: "Products retrieved successfully" });
        }

        existingCartItems[index].quantity -= 1;
        await user.save();

        const productsPromises = existingCartItems.map(async item => {
            const product = await Product.findById({ _id: item.productId });
            return {
                product: product,
                quantity: item.quantity
            }
        });
        const products = await Promise.all(productsPromises);
        return res.status(200).json({ products, message: "Products retrieved successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const increamentProductInCart = async (req, res) => {
    try {
        const user = await CartModel.findOne({ userId: req.id });
        if (!user) {
            return res.status(200).json({ message: "Cart is empty" });
        }

        const existingCartItems = user.items;

        const index = existingCartItems.findIndex(item => item.productId.toString() === req.body.id);

        if (index === -1) {
            return res.status(200).json({ message: "Product not found in cart" });
        }

        existingCartItems[index].quantity += 1;
        await user.save();

        const productsPromises = existingCartItems.map(async item => {
            const product = await Product.findById({ _id: item.productId });
            return {
                product: product,
                quantity: item.quantity
            }
        });
        const products = await Promise.all(productsPromises);
        return res.status(200).json({ products, message: "Products retrieved successfully" });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}