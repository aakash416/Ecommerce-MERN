import 'dotenv/config'
import express from 'express'
import cors from 'cors';
import userRouter from './Routes/userRoutes.js'
import sellerRouter from './Routes/sellerRoutes.js';
import productRouter from './Routes/productRouter.js';
import cartRouter from './Routes/cartRouter.js';
import paymentRouter from './Routes/paymentRouter.js';
import cookieParser from 'cookie-parser';
import connectDB from './Config/DB.js';
import errorHandler from './Middleware/errorMiddleware.js'

const app = express();


// Connect to Database
connectDB();

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))


app.use('/api/users', userRouter)
app.use('/api/sellers', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/payment', paymentRouter)

app.use(errorHandler);

app.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}`) })


