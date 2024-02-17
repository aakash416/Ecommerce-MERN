import Jwt from "jsonwebtoken";


export const tokenVerify = async (req, res, next) => {
    const token = req.body.token;
    if (!token)
        return res.status(401).json({ message: "No token provided" });
    try {
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded._id;
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Invalid token" });
    }
}