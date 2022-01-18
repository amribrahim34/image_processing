import express from 'express';
const app = express.Router();

function get_image() {
    app.get('http://127.0.0.1:3000/api/images?filename=icelandwaterfall&width=200&height=200', (req, res) => {
        return res.status;
    });
}
describe("test suite ", () => {
    it("test ", () => {
        expect(get_image()).toBe();
    });
});
