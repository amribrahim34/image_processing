import express from 'express';
import { make_image } from '../../utilities';

const port = 3000;

const images = express.Router();
images.get('/', (req, res) => {
    let width = Number(req.query.width);
    let height = Number(req.query.height);
    let filename = String(req.query.filename);
    let path: string = `http://localhost:${port}/cached/${filename}_${height}_${width}.jpg`;
    let image = `<img src="${path}" alt="${filename}">`;
    try {
        make_image(width, height, filename);
    } catch (error) {
        res.sendStatus(502);
    }
    let oprtn = make_image(width, height, filename);
    if (oprtn == true) {
        res.status(200);
        res.send(image);
    } else {
        res.send("error occurred");
    }
});

export default images;