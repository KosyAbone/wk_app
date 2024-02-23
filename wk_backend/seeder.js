import mongoose from "mongoose";
import products from "./products";
import users from "./users";
import User from "./models/userModel";
import Product from "./models/productModel";
import Order from "./models/orderModel";
import connectDB from "./config/db";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();
connectDB();

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
    }
    catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}