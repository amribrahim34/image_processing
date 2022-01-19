// creating type for json
interface Json {
    [x: string]: string | number | boolean | Date | Json | JsonArray;
}
interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }

async function get_image() {
    await fetch('http://127.0.0.1:3000/api/images?filename=icelandwaterfall&width=200&height=200', {
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

describe("test suite ", () => {
    it("test ", () => {
        expect(get_image).toEqual(200);
    });
});
