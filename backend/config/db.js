import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sinentlahlapindani:12345@cluster0.hx4ne.mongodb.net/FullStack_App').then(()=>console.log("DataBase Connected"));
}