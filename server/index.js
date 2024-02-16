import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './Routes/userRoutes.js'
import sellerRouter from './Routes/sellerRoutes.js';
import productRouter from './Routes/productRouter.js';


const app = express();


mongoose.connect(process.env.MONGODB_URL).then(() => { console.log('Connected to MongoDB') }).catch(err => { console.log(err) })


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());


app.use('/api/users', userRouter)
app.use('/api/sellers', sellerRouter)
app.use('/api/product', productRouter)



app.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}`) })
