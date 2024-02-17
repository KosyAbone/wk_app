import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import connectDB from './config/db.js';
const port = process.env.PORT || 9000;
import productRoute from './routes/productRoute.js';
connectDB();

const app = express();

app.get('/', (req, res) => res.send('This is the home page'))

app.use('/api/products', productRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));