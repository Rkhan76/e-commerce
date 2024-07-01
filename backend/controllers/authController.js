import userModel from "../models/userModel.js"
import JWT from 'jsonwebtoken'
import { comparePassword, hashPassword } from '../helpers/authHelper.js'

async function registerController(req, res){
try{
 const { name, email, password, phone, address} = req.body
 console.log(name)

 // data validation through zod

 //check user
 const existinguser = await userModel.findOne({email})
console.log(existinguser)
 //existing user
if(existinguser){
    return res.status(200).json({
        success: true,
        message: "Aleardy Register please login",

    })
}

//register user
const hashedPassword = await hashPassword(password)

//save
const user = await userModel.create({ name, email, password: hashedPassword, phone, address })

return res.status(201).json({
  success: true,
  message: 'user Registered succesfully',
})



}catch(error){
console.log(error)
return res.status(500).json({
    success: false,
    message: 'Error in Registration',
    error
})
}
}


//LOGIN || POST

async function handleUserLogin(req, res){
    try{
        const { email, password } = req.body

        //validation through zod 404

        //find user
        const user = await userModel.findOne({ email })
        
        if(!user){
            return res.status(200).json({
                success: false,
                message: 'Email is not registered'
            }) 
        }

        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).json({
                success: false,
                message: "Invalid Password or email"
            })
        }

        //token
        const token = await JWT.sign({ _id: user._id}, process.env.JWT_SECRET, { expiresIn: '7d'})
        return res.status(200).json({
            success: true,
            message: 'login',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
                
            },
            token
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in login",
            error
        })
    }
}


export { registerController, handleUserLogin }
