import { Router } from "express";
import { createDocument, deleteDocument, getAllDocument } from "../controllers/documentController.js";

const router = Router();

router.post("/", createDocument);
router.get('/', getAllDocument)

router.delete("/:id", deleteDocument)


export default router;
