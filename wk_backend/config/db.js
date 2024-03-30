import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected successfully`)
    }
    catch(error) {
        console.error(`Error: ${error.message}`);
        process.exit(0);
    }
}

export default connectDB;