import express from "express";
import { createMember, getTeam } from "../controllers/teamController.js";

const router = express.Router();


router.post("/create", createMember)
// router.patch('/:id', )
router.get('/', getTeam)

export default router;