import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import connectDB from './config/db.js'
import products from './data/products.js'
import productsRoutes from './routers/productRoutes.js'
import userRoutes from './routers/userRoutes.js'
import { erroHandler, notFoundError } from './middleware/errorMiddleware.js'

dotenv.config();
const port = process.env.SERVER_PORT;

connectDB()
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use('/api/products', productsRoutes)
app.use('/api/users', userRoutes)


app.get('/', (req, res) => {
    const rootDir = process.cwd();
    res.sendFile(rootDir + '/backend/public/index.html');
});

app.use(notFoundError)
app.use(erroHandler)
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})