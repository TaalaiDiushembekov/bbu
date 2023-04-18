import express from "express";
import {
    getUsers,
    getUsersById,
    updateUser,
    registration,
    login,
} from "../controllers/userController.js";

import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();
router.get("/admin", authMiddleware, getUsers);
router.get("/admin/:id", getUsersById);

router.post("/login", login);
router.post("/", registration);
router.post("/uploadInfo", updateUser);

export default router;
