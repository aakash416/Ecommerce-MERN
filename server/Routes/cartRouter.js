import express from "express";
import { tokenVerify } from "../Middleware/tokenVerify.js";
import { addProductToCart, getAllProductInCart, removeProductItemById, decreamentProductInCart, increamentProductInCart } from "../Controllers/cartController.js";
const cartRouter = express.Router();

cartRouter.post("/add", tokenVerify, addProductToCart);
cartRouter.get("/all", tokenVerify, getAllProductInCart);
cartRouter.delete("/remove/:id", tokenVerify, removeProductItemById);
cartRouter.put("/decreament", tokenVerify, decreamentProductInCart);
cartRouter.put("/increament", tokenVerify, increamentProductInCart);


export default cartRouter;



