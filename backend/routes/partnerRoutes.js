import { Router } from "express";
import roleMiddleware from "../middleware/roleMiddleware.js";
import { createPartner, deletePartner, getPartners } from "../controllers/partnerController.js";


const router = Router()

router.get('/', getPartners)

router.post('/', roleMiddleware(['moderator']), createPartner)

router.delete('/:id', roleMiddleware(['moderator']), deletePartner)
export default router;