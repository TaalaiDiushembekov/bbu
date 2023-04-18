import { Router } from "express";
import { createTariff, deleteTariff, getAllTariffs, getOneTariff } from "../controllers/tariffController.js";

const router = Router();


router.post('/', createTariff)
router.get('/', getAllTariffs)
router.get('/:id', getOneTariff)
router.delete('/:id', deleteTariff)


export default router;