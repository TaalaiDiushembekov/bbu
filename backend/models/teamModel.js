import { Schema, model } from "mongoose";

const teamModel = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true 
    },
    description: {
        type: String
    },
    order:{
        type: Number
    }
})

const TeamModel = model('teams', teamModel)

export default TeamModel;