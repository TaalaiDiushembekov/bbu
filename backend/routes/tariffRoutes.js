import { Router } from "express";
import { createTariff, deleteTariff, getAllTariffs, getOneTariff } from "../controllers/tariffController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = Router();


router.post('/', roleMiddleware(['moderator']), createTariff)
router.get('/', getAllTariffs)
router.get('/:id', getOneTariff)
router.delete('/:id', roleMiddleware(['moderator']), deleteTariff)


export default router;