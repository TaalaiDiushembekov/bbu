import { Router } from "express";
import { createOrg, getOneOrg, getOrgs, updateOrg } from "../controllers/orgController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";


const router = Router()

router.get('/', roleMiddleware(['admin']), getOrgs)
router.get('/:id', roleMiddleware(['admin', 'user']), getOneOrg)


router.post('/', createOrg)
router.patch('/:id', roleMiddleware(['admin']), updateOrg)

export default router;