import dotenv from 'dotenv'
import express from 'express';
import connectDB from './config/db.js';
import productRoute from './routes/productRoute.js';
import { notFound, handleError } from './middleware/errorHandler.js';
const port = process.env.PORT || 9000;
dotenv.config()
connectDB();

const app = express();

app.get('/', (req, res) => res.send('This is the home page'))

app.use('/api/products', productRoute);
app.use(notFound);
app.use(handleError);

app.listen(port, () => console.log(`Server running on port ${port}`));