import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Yaaahooo🎉, MongoDB Connected Successfully!")
        
    } catch (err) {
        console.err("Database connection error", err);
        process.exit(1);
    }
}

export default connectDB;