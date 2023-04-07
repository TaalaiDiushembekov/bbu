import express from 'express'
import {getProducts, getProductsById, createProduct} from "../controllers/productController.js";

const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductsById)
router.post('/add', createProduct)

export default router
