import { make_image } from "../utilities";

describe("make image function tests - ", () => {
  it("test if the function work", () => {
    make_image(200, 200, "icelandwaterfall").then((out) => {
      expect(out).toBe(true);
    });
  });

  it("test if the function dont work", () => {
    make_image(200, 200, "sdasdasd").then((out) => {
      expect(out).not.toBe(true);
    });
  });
});
