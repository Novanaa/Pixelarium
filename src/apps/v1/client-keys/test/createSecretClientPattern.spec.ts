import { describe, test, expect } from "bun:test";
import createSecretClientPattern from "../utils/createSecretClientPattern";
import expiredToken from "../../../../tests/const/expiredToken";

describe("Unit-Testing Create Secret Client Pattern Client Keys Utilities", () => {
  test("should be return string", () => {
    const clientSecretPattern: string = createSecretClientPattern({
      name: "This is my name",
      token: expiredToken,
    });

    expect(clientSecretPattern).toBeString();
  });
  test("retuned value should be defined or not undefined", () => {
    const clientSecretPattern: string = createSecretClientPattern({
      name: "This is my name",
      token: expiredToken,
    });

    expect(clientSecretPattern).toBeDefined();
    expect(clientSecretPattern).not.toBeUndefined();
  });
  test("retuned value should be match pixelarium client secret pattern", () => {
    const payload = {
      name: "This is my name",
      token: expiredToken,
    };
    const clientSecretPattern: string = createSecretClientPattern(payload);

    expect(clientSecretPattern).toMatch(`${payload.name}.${payload.token}`);
  });
});
