import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://sandesh:NjK2V8RR8eel3voY@cluster0.emfct7r.mongodb.net/agora?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;
