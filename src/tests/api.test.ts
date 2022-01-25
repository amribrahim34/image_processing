// import app from '../index';
import express from 'express';
import request from 'supertest';

const app = express();

// app.get('test', (req, res) => {
//     res.status(200).send({ data: "sss" });
// })

test('adds 1 + 2 to equal 3', async () => {
    const response = await request(app).get('/api/images?filename=icelandwaterfall&width=200&height=500');
    expect(response.statusCode).toBe(200);
});