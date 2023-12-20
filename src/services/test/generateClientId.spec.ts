import generateClientId from "../generateClientId";
import { describe, test, expect } from "bun:test";

describe("Unit-Testing generateClientId Services", () => {
  const providerId: number = 192028;
  test("returned value should be string", () => {
    const clientId: string = generateClientId(providerId);

    expect(clientId).toBeString();
  });
  test("returned value should be defined", () => {
    const clientId: string = generateClientId(providerId);

    expect(clientId).not.toBeUndefined();
  });
  test("returned value should be match pixelarium client id", () => {
    const clientId: string = generateClientId(providerId);

    expect(clientId).toMatch("pxlmid-");
  });
});
