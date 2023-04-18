import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const url = process.env.MONGO_URL

const connectDB = async () => {
    try {
        mongoose.connect(url)
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
}
export default connectDB
