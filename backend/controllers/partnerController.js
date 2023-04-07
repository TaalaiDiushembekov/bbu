import asyncHandler from 'express-async-handler'
import Partners from "../models/partnerModel.js"

const getPartners = asyncHandler(async(req, res) => {
    const partners = await Partners.find()
    res.json(partners)
})

export {getPartners}
