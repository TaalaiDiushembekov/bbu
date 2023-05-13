import { Router } from "express";
import { createTariff, deleteTariff, getAllTariffs, getOneTariff, updateTariff } from "../controllers/tariffController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = Router();


router.post('/', roleMiddleware(['moderator']), createTariff)
router.get('/', getAllTariffs)
router.get('/:id', getOneTariff)
router.delete('/:id', roleMiddleware(['moderator']), deleteTariff)
router.patch('/:id', roleMiddleware(['moderator']), updateTariff)

export default router;