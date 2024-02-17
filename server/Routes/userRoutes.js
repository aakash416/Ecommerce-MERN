import express from "express";
import { userRegister, userLogin, updateProfile } from "../Controllers/userController.js";
import { tokenVerify } from "../Middleware/tokenVerify.js";
const userRouter = express.Router();


userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

userRouter.put("/update", tokenVerify, updateProfile);


export default userRouter;