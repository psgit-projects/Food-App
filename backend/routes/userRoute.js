import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';

// Initialize the router
const userRouter = express.Router();

// Route for user registration
userRouter.post('/register', registerUser);

// Route for user login
userRouter.post('/login', loginUser);

export default userRouter;

