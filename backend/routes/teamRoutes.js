import express from "express";
import { createMember, getTeam } from "../controllers/teamController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();


router.post("/create", roleMiddleware(['moderator']), createMember)
// router.patch('/:id', )
router.get('/', getTeam)

export default router;