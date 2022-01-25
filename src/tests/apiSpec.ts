// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');
import { make_image } from "../utilities"

// creating type for json
interface Json {
    [x: string]: string | number | boolean | Date | Json | JsonArray;
}
interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }

// const app = express();
// app.get('/test', (req: any, res: any) => {
//     res.status(200).json({ name: 'john' });
// })

describe("make image function tests - ", () => {
    it("test if the function work", () => {
        expect(make_image(200, 200, "icelandwaterfall")).toBe(true);
    });

    it("test if the function dont work", () => {
        expect(make_image(200, 200, "sdasdasd")).not.toBe(true);
    });

    // it("test if the endpoint work", () => {
    //     return request(app).get('/test').expect(200);
    // });
});
