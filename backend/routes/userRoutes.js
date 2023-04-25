import express from "express";
import {
    getUsers,
    updateUser,
    registration,
    login,
    getOneUser,
    logout,
} from "../controllers/userController.js";

import authMiddleware from '../middleware/authMiddleware.js'
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();
router.get("/:id", authMiddleware, getOneUser);
router.get("/", authMiddleware, getUsers);

router.post("/login", login);
router.post('/logout', logout)
router.post("/", roleMiddleware(['admin']) ,registration);
router.post("/uploadInfo", updateUser);

export default router;
