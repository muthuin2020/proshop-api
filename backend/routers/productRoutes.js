import express from "express"
import { getAllProducts, getProduct } from "../controller/productController.js"

const app = express()
const router = express.Router()

router.route('/').get(getAllProducts)
router.route('/:id').get(getProduct)

export default router;