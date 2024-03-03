import express from "express";
import { tokenVerify } from "../Middleware/tokenVerify.js";
import { viewAllUsers, viewAllSellers, viewSingleUser, updateUser, deleteUser } from "../Controllers/adminController.js";
import { isAdmin } from "../Middleware/isAdmin.js";
import { getAllProduct, getProductById, getAllProductSeller, removeProductSellerById, updatedProductById } from "../Controllers/productController.js";


const adminRouter = express.Router();


adminRouter.get("/allUsers", tokenVerify, isAdmin, viewAllUsers);
adminRouter.get("/allUser/:id", tokenVerify, isAdmin, viewSingleUser);
adminRouter.put("/update/:id", tokenVerify, isAdmin, updateUser);
adminRouter.delete("/delete/:id", tokenVerify, isAdmin, deleteUser);
adminRouter.get("/allSeller", tokenVerify, isAdmin, viewAllSellers);







export default adminRouter;