import { make_image } from "../utilities";
import supertest from "supertest";
import app from "../index"

let base_url = "http://localhost:3000/"
const request = supertest;

describe("test image function - ", () => {
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

describe("test API endpoints ", () => {

  it("test that / return code 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  it("test the actual API return code 200", async () => {
    const res = await request(app).get("/api/images?filename=fjord&width=200&height=300");
    expect(res.statusCode).toBe(200);
  });
})
