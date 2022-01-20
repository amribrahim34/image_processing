import express from 'express';
import routes from './routes/index';
import { promises as fspromises } from 'fs';

const sharp = require('sharp');

const app = express();
const port = 3000;
// app.use('/api', routes);


async function make_image(width, height, image) {
    sharp(image)
        .resize(width, height)
        .toFile('output.jpg', function (err) {
            // output.jpg is a 300 pixels wide and 200 pixels high image
            // containing a scaled and cropped version of input.jpg
        });
}

app.get('/api/images', (req, res) => {

    let image = make_image(req.query.width, req.query.height, req.query.filename);
    res.status(200);
    res.send(image);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});