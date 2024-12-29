import mongoose from "mongoose";

export const connectDB = async () => { 
    await mongoose.connect('mongodb+srv://ps:preeti123@food.cx29m.mongodb.net/food');
    console.log("Database Connected Successfully");
  } 