import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./connectDB/connection.js"
import router from './routes/router.js'
import  { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import fileUpload from 'express-fileupload';
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'

import { fileURLToPath } from "url";
import {createSuperAdmin, createModerator} from './superAdmin.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()
const app = express()
connectDB()

const PORT = process.env.PORT || 8080

const corsOptions ={
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


app.use(express.json())
app.use(cors(corsOptions))
app.use(fileUpload({}))
app.use(cookieParser())
app.use('/api/v1', router)

app.use('/api/v1', express.static(path.resolve(__dirname, 'public/assets/img/team')))

// if (process.env.NODE_ENV === 'production') {
//         app.use(express.static(path.join(path.resolve(), '/frontend/build')))
//     }
    
    
    app.use(notFound)
    app.use(errorHandler)
const {SU_EMAIL, SU_PASSWORD, SU_ROLE, MD_EMAIL, MD_PASSWORD, MD_ROLE} = process.env
createSuperAdmin(SU_EMAIL, SU_PASSWORD, SU_ROLE)
createModerator(MD_EMAIL, MD_PASSWORD, MD_ROLE)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`)
})
