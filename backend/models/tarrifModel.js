import { Schema, model } from "mongoose";


const tariffModel = new Schema({
    name: {
        type:String,
        required: true,
    },
    services: [{
        type: String,
        required: true
    }]
})

const TariffModel = model('tariffs', tariffModel)

export default TariffModel;