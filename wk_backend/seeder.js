import mongoose from "mongoose";
import products from "./products.js";
import users from "./users.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();
await connectDB();

const importData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;  
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        }); 
        await Product.insertMany(sampleProducts);  
        console.log("Data successfully Imported!".green.inverse);
        process.exit();
    }
    catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("Data successfully Destroyed!".red.inverse);
        process.exit();
    }
    catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
