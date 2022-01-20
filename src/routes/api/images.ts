import express from 'express';

const images = express.Router();
images.get('/images', (req, res) => {
    res.status(200);
    res.send('done');
});

export default images;