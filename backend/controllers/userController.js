import userModel from '../models/user-model.js';
import validator from "validator";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
// Register User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" });
        }

        // Validate password length
        if (password.length < 3) {
            return res.json({ success: false, message: "Password should be at least 3 characters long" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10); // Fixed typo: 'bycrpt' -> 'bcrypt'
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        // Save user to database
        const user = await newUser.save();
        res.json({ success: true, message: "User registered successfully", user });

    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" });
        }

        // Check if user exists
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // Validate JWT_SECRET
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ success: false, message: "JWT_SECRET is not defined" });
        }

        // Generate token
        const token = jwt.sign({ id: user._id }, jwtSecret, {
            expiresIn: "1h", // Optional: Set token expiration
        });

        // Return response
        res.json({ success: true, message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};
