import express from 'express'
import colors from 'colors';
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan';
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import { isAdmin, requireSignIn } from './middlewares/authMiddleware.js'

//configure env
dotenv.config()

//database config
connectDB('mongodb://127.0.0.1:27017/e-commerce-backend')

//rest object
const app = express()
const port = process.env.PORT || 8080

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authRoute)

app.get('/test', requireSignIn,isAdmin, (req, res)=>{
    res.json({
        msg: "hllo i am here"
    })
})

app.listen(port, ()=>{
    console.log(`server is running in ${process.env.DEV_MODE} on port 8080`)
})
