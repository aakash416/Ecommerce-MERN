import express from 'express';
import { createOrder,verifyPayment } from '../Controllers/paymentController.js';
import { tokenVerify } from '../Middleware/tokenVerify.js';



const paymentRouter = express.Router();

paymentRouter.post('/creaate', tokenVerify, createOrder)
paymentRouter.post('/verify', tokenVerify, verifyPayment)


export default paymentRouter