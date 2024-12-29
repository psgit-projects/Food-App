import mongoose from "mongoose";

export const connectDB = async () => { 
    await mongoose.connect('YOUR_DATABASE_URL');
    console.log("Database Connected Successfully");
  } 
