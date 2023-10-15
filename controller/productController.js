import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js"


// @desc this will fetch all products
const getAllProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find({})
    res.status(200).json(products)
})

// @desc this will fetch a product
const getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(404).json({ message: 'Resource not found' })
    }
    res.send(product)
})


export { getAllProducts, getProduct }