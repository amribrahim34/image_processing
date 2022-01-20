// creating type for json
interface Json {
    [x: string]: string | number | boolean | Date | Json | JsonArray;
}
interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }

function get_image() {
    return fetch('http://localhost:3000/api/images?filename=icelandwaterfall&width=200&height=200', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    }).then(
        (response) => {
            return response.status;
        }
    );
}

describe("test if the endpoint work", () => {
    it("test if the endpoint work", () => {
        console.log(get_image);
        expect(get_image).toEqual(200);
    });
});
