import mongoose from "mongoose";

const partnersSchema = mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
}, {timestamp: true})

const Partners = mongoose.model('partners', partnersSchema)

export default Partners
