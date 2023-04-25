import { Schema, model } from "mongoose";

const partnerModel = new Schema({
    image: {
        type: String,
        required: true
    }
})


const PartnerModel = model('partners', partnerModel)

export default PartnerModel