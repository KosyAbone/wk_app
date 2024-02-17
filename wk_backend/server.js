import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
const port = process.env.PORT || 9000;
import productRoute from './routes/productRoute.js';

const app = express();

app.get('/', (req, res) => res.send('This is the home page'))

app.use('/api/products', productRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));