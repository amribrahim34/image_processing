import express from 'express';
import routes from './routes/index';
import { promises as fspromises } from 'fs';

const sharp = require('sharp');

const app = express();
const port = 3000;
// app.use('/api', routes);
app.use(express.static('public'));
app.use('/images', express.static('images'));


// return fs.promises.readFile(configFile, helpers.utf8Encoding)
//     .then(JSON.parse);



function make_image(width: any, height: any, name: any) {
    sharp(`../public/images/${name}`)
        .resize(width, height)
        .toFile(`../public/cached/${name}_${height}_${width}`, function (err: string) {
            // output.jpg is a 300 pixels wide and 200 pixels high image
            // containing a scaled and cropped version of input.jpg
            console.log(err);
        });
}

function get_cached_image(name: string) {
    fspromises.access(`/public/images/${name}`).then();

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