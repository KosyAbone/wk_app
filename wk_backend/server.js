import express from 'express';
const port = 6000;

const app = express();

app.get('/', (req, res) => res.send('This is the home page'))

app.listen(port, () => console.log(`Server running on port ${port}`));