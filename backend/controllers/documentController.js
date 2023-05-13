import {
    createDocument as createDocumentService,
    deleteDocument as deleteDocumentService,
    getAllDocument as getAllDocumentService
} from "../services/documentService.js";

const createDocument = async (req, res, next) => {
    try {
        const { name, link, org_id } = req.body;
        const doc = await createDocumentService(name, link, org_id);

        res.json(doc);
    } catch (error) {
        next(error);
    }
};

const getAllDocument = async (req,res, next) => {
    try {
        const docs = await getAllDocumentService()

        return res.json(docs)
    } catch (error) {
        next(error)
    }
}

const deleteDocument = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        await deleteDocumentService(id);

        return res.json({message: `document deleted`})
    } catch (error) {
        next(error);
    }
};

export { createDocument, getAllDocument, deleteDocument };
