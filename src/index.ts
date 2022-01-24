import express from 'express';
import fs from 'fs';

const sharp = require('sharp');

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use('/cached', express.static('cached'));


function make_image(width: number, height: number, name: string) {
    let path: string = `./public/cached/${name}_${height}_${width}.jpg`;
    if (get_cached_image(path) == false) {
        return sharp(`./public/images/${name}.jpg`)
            .resize(width, height)
            .toFile(path, function (err: any) {
                console.log(err)
                return err;
            });
    }
    return true;
}

function get_cached_image(path: string): boolean {
    return fs.existsSync(path);

}

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