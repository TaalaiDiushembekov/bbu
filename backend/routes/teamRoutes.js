import express from "express";
import { createMember, deleteMember, getOneMember, getTeam, updateMember } from "../controllers/teamController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();


router.post("/create", roleMiddleware(['moderator']), createMember)

router.get('/', getTeam)
router.get('/:id', roleMiddleware(['moderator']), getOneMember)

router.patch('/:id', roleMiddleware(['moderator']), updateMember)
router.delete('/:id', roleMiddleware(['moderator']), deleteMember)

export default router;