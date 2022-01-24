import express from 'express';
import fs from 'fs';
import { make_image } from './utilities';

const sharp = require('sharp');

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use('/cached', express.static('cached'));




app.get('/api/images', (req, res) => {
    let width = Number(req.query.width);
    let height = Number(req.query.height);
    let filename = String(req.query.filename);
    let path: string = `http://localhost:${port}/cached/${filename}_${height}_${width}.jpg`;
    let image = `<img src="${path}" alt="${filename}">`;
    let oprtn = make_image(width, height, filename);
    if (oprtn == 'success' || oprtn == true) {
        res.status(200);
        res.send(image);
    } else {
        res.send("error occurred");
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});