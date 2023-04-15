import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

let PORT = 8080
let url = "mongodb+srv://admin:qwe1716618zxc@cluster0.sfofj.mongodb.net/babbyboom?retryWrites=true&w=majority"
// const url = process.env.MONGO_URL

const connectDB = async () => {
    try {
        const newConnect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
   console.log("db is connected".bgCyan .black)
    } catch (error) {
        console.log("Ощибка подключения к базе")
    }
}
export default connectDB
