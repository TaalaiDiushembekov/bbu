import DocumentModel from "../models/documentModel.js";
import OrgModel from "../models/orgModel.js";
import ErrorService from "./errorService.js";

const createDocument = async (name, link, org_social_number) => {
    const doc = await DocumentModel.create({ name, link });

    const org = await OrgModel.findOne({org_social_number})
    if(!org){
        throw ErrorService.ServerInternalError('No organization with this social number')
    }
    await doc.save();
    
    org.org_document.push(doc._id)

    org.save()

    return {
        id: doc.id,
        name,
        link,
    };
};

const getAllDocument = async () => {
    return await DocumentModel.find()
}

const deleteDocument = async (_id) => {
    return await DocumentModel.deleteOne({_id})
}

export { createDocument, getAllDocument, deleteDocument };
