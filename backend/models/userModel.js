import { Schema, model } from 'mongoose';


const orgModel = new Schema({
    org_name: {
        type: String,
        required: true,
    },
    org_director: {
        type: String, 
        required: true
    },
    org_director_passport: {
        series: {
            type: String,
            required: true,
            unique: true
        },
        authority: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    },
    org_phone: {
        type: Number,
        required: true
    },
    org_social_number: {
        type: Number,
        required: true
    },
    org_activity: {
        type: String,
        required: true
    },
    org_legal:{
        type: String,
        required: true
    },
    org_civil_status: {
        type: String, 
        required: true
    }
})
const userModel = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin', 'moderator'],
    }
})




const UserModel = model('users', userModel)

export default UserModel
