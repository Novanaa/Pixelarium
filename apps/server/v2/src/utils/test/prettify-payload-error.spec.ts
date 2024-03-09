/* eslint-disable quotes */

import { test, expect, describe } from "bun:test";
import prettifyPayloadError from "../prettify-payload-error";

describe("Prettify Payload Error", () => {
  test("should be return prettified payload error messege", () => {
    const errorMessege: string =
      "The username should be include capital letter!";
    const expectedValue: string = `(Invalid Payload Pattern) - ${errorMessege}`;

    expect(prettifyPayloadError(errorMessege)).toBe(expectedValue);
  });
  test("double quote should be removed", () => {
    const errorMessege: string =
      'The username should be include "capital" letter!';
    const expectedValue: string =
      `(Invalid Payload Pattern) - ${errorMessege}`.replace(/"/g, "");

    expect(prettifyPayloadError(errorMessege)).toBe(expectedValue);
  });
  test("should be included error messege title", () => {
    const errorMessege: string =
      'The username should be include "capital" letter!';
    const expectedValue: string = `(Invalid Payload Pattern)`;

    expect(prettifyPayloadError(errorMessege)).toContain(expectedValue);
  });
});
