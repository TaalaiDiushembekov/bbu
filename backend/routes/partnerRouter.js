import express from 'express'
import {getPartners} from "../controllers/partnerController.js"

const router = express.Router()

router.route('/about').get(getPartners)


export default router
