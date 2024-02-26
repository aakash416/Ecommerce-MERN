import Product from "../Model/productModel.js";


const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        return res.status(201).json({ product, message: "Product created successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({ products, message: "Products fetched successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json({ product, message: "Product fetched successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const updatedProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.body._id, req.body, { new: true });
        return res.status(200).json({ product, message: "Product updated successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}


export const getAllProductSeller = async (req, res) => {
    try {
        const products = await Product.find({ seller: req.params.id });
        return res.status(200).json({ products, message: "Products fetched successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const removeProductSellerById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        const products = await Product.find({ seller: req.id });
        return res.status(200).json({ products, message: "Product deleted successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export { addProduct, getAllProduct, getProductById };


