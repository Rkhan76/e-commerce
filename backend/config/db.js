import mongoose from "mongoose";

async function connectDB(url){
    try{
        const conn = await mongoose.connect(url)
        console.log(`Connected to mongodb Database ${conn.connection.host}`)
    }catch(err){
        console.log(`Error in connecting mongodb ${err}`)
    }
}


export default connectDB