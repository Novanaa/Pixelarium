import { describe, expect, test } from "bun:test";
import generateDirectViewLinkPicture from "../services/generateDirectViewLinkPicture";
import { CLIENT_FRONTEND_URL } from "../../../../const/env";

describe("generateDirectViewLinkPicture", () => {
  // Generates a direct view link for a picture with a valid unique key.
  test("should generate a direct view link for a picture with a valid unique key", () => {
    const uniquekey = "abc123";
    const directViewLink = generateDirectViewLinkPicture(uniquekey);
    expect(directViewLink).toBe(`${CLIENT_FRONTEND_URL}/picture/${uniquekey}`);
  });

  // Returns a string with the direct view link for the picture.
  test("should return a string with the direct view link for the picture", () => {
    const uniquekey = "abc123";
    const directViewLink = generateDirectViewLinkPicture(uniquekey);
    expect(typeof directViewLink).toBe("string");
  });

  // The direct view link contains the CLIENT_FRONTEND_URL and the unique key.
  test("should contain the CLIENT_FRONTEND_URL and the unique key in the direct view link", () => {
    const uniquekey = "abc123";
    const directViewLink = generateDirectViewLinkPicture(uniquekey);
    expect(directViewLink).toContain(CLIENT_FRONTEND_URL);
    expect(directViewLink).toContain(uniquekey);
  });
});
