import express from 'express';
import routes from './routes/index';
// import { promises as fspromises } from 'fs';
import fs from 'fs';

const sharp = require('sharp');

const app = express();
const port = 3000;
// app.use('/api', routes);
app.use(express.static('public'));
app.use('/images', express.static('images'));


// return fs.promises.readFile(configFile, helpers.utf8Encoding)
//     .then(JSON.parse);


function make_image(width: number, height: number, name: string) {
    let path: string = `./public/cached/${name}_${height}_${width}.jpg`;
    if (get_cached_image(path) == false) {
        console.log(`doesn't exist`);
        console.log(get_cached_image(path));
        return sharp(`./public/images/${name}.jpg`)
            .resize(width, height)
            .toFile(path, function (err: string) {
                // output.jpg is a 300 pixels wide and 200 pixels high image
                // containing a scaled and cropped version of input.jpg
                console.log(err);
            });
    } else {
        console.log(get_cached_image(name));
        console.log('exist');
    }

}

function get_cached_image(path: string): boolean {
    return fs.existsSync(path);

}

app.get('/api/images', (req, res) => {
    let width = Number(req.query.width);
    let height = Number(req.query.height);
    let filename = String(req.query.filename);
    let image = make_image(width, height, filename);
    res.status(200);
    res.send(image);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log(get_cached_image('fjord.jpg'));
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});