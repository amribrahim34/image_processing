import express from 'express';
import fs from 'fs';
import { make_image } from './utilities';
import routes from './routes/index';

const sharp = require('sharp');

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use('/cached', express.static('cached'));




app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});