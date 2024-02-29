import { describe, expect, test } from "bun:test";
import generateDirectPictureLink from "../utils/generateDirectPictureLink";

describe("generateDirectPictureLink", () => {
  // Generates a direct picture link with valid link and URL parameters.
  test("should generate a direct picture link with valid link and URL parameters", () => {
    const params = {
      link: "https://example.com/image.jpg",
      url: "https://example.com/image.jpg",
    };

    const result = generateDirectPictureLink(params);

    expect(result).toEqual({
      image_link: "https://example.com/image.jpg",
      image_url: "https://example.com/image.jpg",
    });
  });

  // Returns a DirectLink object with image_link and image_url properties.
  test("should return a DirectLink object with image_link and image_url properties", () => {
    const params = {
      link: "https://example.com/image.jpg",
      url: "https://example.com/image.jpg",
    };

    const result = generateDirectPictureLink(params);

    expect(result).toHaveProperty("image_link");
    expect(result).toHaveProperty("image_url");
  });

  // Handles empty string values for link and url parameters.
  test("should handle empty string values for link and url parameters", () => {
    const params = {
      link: "",
      url: "",
    };

    const result = generateDirectPictureLink(params);

    expect(result).toEqual({
      image_link: "",
      image_url: "",
    });
  });

  // Handles special characters in link and url parameters.
  test("should handle special characters in link and url parameters", () => {
    const params = {
      link: "https://example.com/image with spaces.jpg",
      url: "https://example.com/image%20with%20spaces.jpg",
    };

    const result = generateDirectPictureLink(params);

    expect(result).toEqual({
      image_link: "https://example.com/image with spaces.jpg",
      image_url: "https://example.com/image%20with%20spaces.jpg",
    });
  });
});
