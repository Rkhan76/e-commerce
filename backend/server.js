import express from 'express'
import colors from 'colors';
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan';

//configure env
dotenv.config()

//database config
connectDB('mongodb://127.0.0.1:27017/e-commerce-backend')

//rest object
const app = express()
const port = process.env.PORT || 8080

//middlewares
app.use(express.json())
app.use(morgan('dev'))

app.listen(port, ()=>{
    console.log(`server is running in ${process.env.DEV_MODE} on port 8080`)
})
