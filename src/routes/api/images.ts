import express from "express";
import { make_image } from "../../utilities";

const port = 3000;

const images = express.Router();
images.get("/", (req, res): void => {
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const filename = String(req.query.filename);
  const path = `http://localhost:${port}/cached/${filename}_${height}_${width}.jpg`;
  const image = `<img src="${path}" alt="${filename}">`;
  make_image(width, height, filename)
    .then(() => {
      res.status(200);
      res.send(image);
    })
    .catch((error) => {
      res.send(error);
    });
});

export default images;
