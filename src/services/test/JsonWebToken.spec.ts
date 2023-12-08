import { test, expect, describe } from "bun:test";
import JsonWebToken from "../JsonWebToken";
const jwt = new JsonWebToken();

const payload = {
  email: "mamah@gmail.com",
  name: "nova",
  picture: "test.png",
};

const regex: RegExp = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;

describe("Unit-testing JsonWebToken Services", () => {
  test("should be generate accessToken and refreshToken", () => {
    const token: { accessToken: string; refreshToken: string } =
      jwt.sign(payload);

    console.log(token);
    expect(token.accessToken).toBeDefined();
    expect(token.refreshToken).toBeDefined();
  });
  test("token should be string", () => {
    const token: { accessToken: string; refreshToken: string } =
      jwt.sign(payload);

    expect(token.accessToken).toBeString();
    expect(token.refreshToken).toBeString();
  });
  test("token should be match with regex", () => {
    const token: { accessToken: string; refreshToken: string } =
      jwt.sign(payload);

    const accessTokenMatch: boolean = regex.test(token.accessToken);
    const refreshTokenMatch: boolean = regex.test(token.refreshToken);

    expect(accessTokenMatch).toBeTrue();
    expect(refreshTokenMatch).toBeTrue();
  });
});
