import express from "express";
import { tokenVerify } from "../Middleware/tokenVerify.js";
import { addProductToCart, getAllProductInCart, removeProductItemById } from "../Controllers/cartController.js";
const cartRouter = express.Router();

cartRouter.post("/add", tokenVerify, addProductToCart);
cartRouter.get("/all", tokenVerify, getAllProductInCart);
cartRouter.put("/remove", tokenVerify, removeProductItemById);


export default cartRouter;



