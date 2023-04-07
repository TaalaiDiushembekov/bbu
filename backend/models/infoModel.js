import mongoose from 'mongoose'

const infoSchema = mongoose.Schema({
        salary: {
            type: String,
            required: true
        },

    },
    {timestamps: true})

const Info = mongoose.model('infos', infoSchema)

export default Info
