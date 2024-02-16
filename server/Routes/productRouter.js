import express from "express";
import { addProduct, getAllProduct, getProductById } from "../Controllers/productController.js";
const productRouter = express.Router();



productRouter.post("/add", addProduct);
productRouter.get("/all", getAllProduct);


productRouter.get("/:id", getProductById);





export default productRouter;