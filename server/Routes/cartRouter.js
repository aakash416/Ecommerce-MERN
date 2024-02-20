import express from "express";
import { tokenVerify } from "../Middleware/tokenVerify.js";
import { addProductToCart, getAllProductInCart } from "../Controllers/cartController.js";
const cartRouter = express.Router();

cartRouter.put("/add", tokenVerify, addProductToCart);
cartRouter.get("/all/:id", getAllProductInCart);


export default cartRouter;