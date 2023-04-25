import { Schema, model } from "mongoose";

const documentModel = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
    }
})

const DocumentModel = model('documents', documentModel);


export default DocumentModel;