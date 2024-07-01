import express from 'express'
import {
  registerController,
  handleUserLogin,
} from '../controllers/authController.js'

const router = express.Router()

//routing
// REGISTER || METHOD POST
router.post('/register', registerController)

// LOGIN || METHOD POST
router.post('/login', handleUserLogin)


export default router