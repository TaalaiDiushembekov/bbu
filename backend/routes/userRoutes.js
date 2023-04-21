import express from "express";
import {
    getUsers,
    updateUser,
    registration,
    login,
    getOneUser,
} from "../controllers/userController.js";

import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();
router.get("/", authMiddleware, getUsers);
router.get("/:id", authMiddleware, getOneUser);

router.post("/login", login);
router.post("/", registration);
router.post("/uploadInfo", updateUser);

export default router;
