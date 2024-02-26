const User = require('../models/userModel');
const Product = require('../models/productModel');

// View all users
exports.viewAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// View all products (including moderation)
exports.viewAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Moderate a product listing
exports.moderateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        // Implement moderation logic, e.g., approve or reject a product listing
        res.json({ msg: 'Product moderated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
