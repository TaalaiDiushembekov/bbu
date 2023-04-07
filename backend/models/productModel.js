import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true}
})
const productSchema = mongoose.Schema({
        // user: {
        //     type: String,
        //     required: true,
        //     default: false
        // },
        user: {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'User',
           // required: true
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        image: {
            type: String,
            required: true,
            default: false
        },
        brand: {
            type: String,
            required: false,
            // default: false
        },
        category: {
            type: String,
            required: false,
            // default: false
        },
        description: {
            type: String,
            required: false,
            // default: false
        },
        rating: {
            type: Number,
            required: false,
            // default: false
        },
        numReviews: {
            type: Number,
            required: false,
            // default: false
        },
        price: {
            type: Number,
            required: false,
            // default: false
        },
        counterInStock: {
            type: Number,
            required: false,
            // default: false
        },
        job: {
            type: String,
            required: false
        }   ,
        organization: {
            type: String,
            required: false,
            // default: false
        },

        reviews: [reviewSchema]
    }, {timestamps: true})

const Product = mongoose.model('products', productSchema)

export default Product
