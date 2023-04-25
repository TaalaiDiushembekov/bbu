import { Schema, model } from 'mongoose';

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
    },
    org: {
        type: Schema.Types.ObjectId,
        ref: 'organization'
    }
})




const UserModel = model('users', userModel)

export default UserModel
