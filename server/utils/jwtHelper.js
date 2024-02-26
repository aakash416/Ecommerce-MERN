const jwt = require('jsonwebtoken');

// Function to generate a new JWT tokens

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Function to verify a JWT token and extract the user ID
const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded.id; // Return user ID from the token
    } catch (error) {
        console.error('JWT Verification Error:', error);
        return null;
    }
};

module.exports = {
    generateToken,
    verifyToken,
};
