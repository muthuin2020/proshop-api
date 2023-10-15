import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from "./config/db.js";
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import products from "./data/products.js";
import users from './data/users.js'

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany()
        await Order.deleteMany();

        const userData = await User.insertMany(users);
        const adminUser = userData[0]._id;

        const sampleProduct = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProduct)
        //  await Order.insertMany(orders)
        console.log('Data import completed'.green.inverse)
        process.exit();
    }
    catch (err) {
        console.log('Data import failed'.red.inverse)
        console.log(err)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany()
        await Order.deleteMany()
        console.log('Data destroyed successfully'.green.inverse)
        process.exit()
    }
    catch (err) {
        console.log('Data delete failed'.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData();
}
else if (process.argv[2] === '-i') {
    importData()
}
else {
    console.log('Please provide correct argument')
}