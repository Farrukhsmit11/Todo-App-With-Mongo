import mongoose from "mongoose";
const mongodbURi = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(mongodbURi)
        console.log("Mongodb connected")
    } catch (error) {
        console.error("mongodb connection failed", error)
    }
}

connectDB();