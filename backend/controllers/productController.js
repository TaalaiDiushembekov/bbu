import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find()
    res.json(products)
})



const getProductsById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
    }
})

const createProduct = asyncHandler(async(req, res) => {
    const product = await Product.create(req.body)
    res.json(product)
})

const updateProduct = asyncHandler(async(req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.json(product)
})

const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.json(product)
})

export {getProducts, getProductsById, createProduct}
