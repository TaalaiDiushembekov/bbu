import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./connectDB/connection.js"
import router from './routes/router.js'
import  { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import fileUpload from 'express-fileupload';
import cors from 'cors'
import path from 'path'

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()
const app = express()
connectDB()

const PORT = process.env.PORT || 8080
app.use(express.json())
app.use(cors())
app.use(fileUpload({}))
app.use('/api/v1', router)

app.use('/api/v1', express.static(path.resolve(__dirname, 'public/assets/img/products')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(path.resolve(), '/frontend/build')))
}

app.use(notFound)
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`)
})
