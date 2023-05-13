import express from "express";
import {
    getUsers,
    updateUser,
    registration,
    login,
    getOneUser,
    logout,
    refreshUser,
} from "../controllers/userController.js";

import authMiddleware from '../middleware/authMiddleware.js'
import roleMiddleware from "../middleware/roleMiddleware.js";
import tokenRefreshMiddleware from "../middleware/tokenRefreshMiddleware.js";

const router = express.Router();
router.get("/refresh", tokenRefreshMiddleware, refreshUser);
router.get("/:id",  roleMiddleware(['admin', 'user']), getOneUser);
router.get("/", roleMiddleware(['admin']), getUsers);



router.post("/login", login);
router.post('/logout', logout);
router.post("/", roleMiddleware(['admin']) ,registration);
router.patch("/:id", roleMiddleware(['admin']), updateUser);

export default router;
