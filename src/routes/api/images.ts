import express from 'express';
import { make_image } from '../../utilities';
import fs from "fs";

const fsPromises = fs.promises;


const port = 3000;

const images = express.Router();
images.get('/', (req, res) => {
    let width = Number(req.query.width);
    let height = Number(req.query.height);
    let filename = String(req.query.filename);
    let path: string = `http://localhost:${port}/cached/${filename}_${height}_${width}.jpg`;
    let image = `<img src="${path}" alt="${filename}">`;
    make_image(width, height, filename).then((img) => {
        res.status(200);
        res.send(image);
    })
        .catch((error) => {
            res.send(error)
        })
});

export default images;