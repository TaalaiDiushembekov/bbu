import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      // required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,

    },
    salary: {
        type: String,
        required: false,
        // default: false
        },
    organization: {
        type: String,
        required: false,
        // default: false
        },
    department_manager:{
        type: String,
        required: false,
        // default: false
        },
    cart:{
        type: String,
        required: false,
        // default: false
    },
    info: {
        type: String,
        required: false
    }
},
    {timestamps: true})


userSchema.pre('save', async function (next) {
  this.password = bcrypt.hashSync(this.password, 10)
    next()
})

userSchema.methods.matchPassword = (async function (password) {
    return bcrypt.compare(password, this.password)
})
const User = mongoose.model('users', userSchema)
// const users = await User.aggregate([
//     {$lookup: {
//             from: 'products',
//             localField: 'organization',
//             foreignField: 'organization',
//             as:'department_manager'
//         }},
//     {$match: {organization: "1"}}
//
// ])
// res.json(users)

export default User
