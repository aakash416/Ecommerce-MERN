import express from "express";
import { addProduct, getAllProduct, getProductById, getAllProductSeller, removeProductSellerById, updatedProductById } from "../Controllers/productController.js";
import { tokenVerify } from "../Middleware/tokenVerify.js";
import { isSeller } from "../Middleware/isSellerMiddleware.js";
const productRouter = express.Router();



productRouter.post("/add", tokenVerify, isSeller, addProduct);
productRouter.get("/all", getAllProduct);


productRouter.get("/:id", getProductById);

productRouter.put("/update", tokenVerify, isSeller, updatedProductById);


productRouter.get("/seller/:id", tokenVerify, isSeller, getAllProductSeller);
productRouter.delete("/remove/:id", tokenVerify, isSeller, removeProductSellerById);





export default productRouter;