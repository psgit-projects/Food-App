import mongoose from 'mongoose';

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensures the email is unique
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    cartData: { // Object for cart items
        type: Object,
        default: {},
        minimize: false, // Ensures empty objects are stored as is
    },
});

// Create the User model
const userModel = mongoose.models.user || mongoose.model('user', userSchema);

// Export the model
export default userModel;
