import { make_image } from "../utilities"

describe("make image function tests - ", () => {
    it("test if the function work", () => {
        expect(make_image(200, 200, "icelandwaterfall")).toBe(true);
    });

    it("test if the function dont work", () => {
        expect(make_image(200, 200, "sdasdasd")).not.toBe(true);
    });
});
