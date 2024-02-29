import { describe, test, expect } from "bun:test";
import searchQueryGalleryPictures from "../services/searchQueryGalleryPictures";

describe("searchQueryGalleryPictures", () => {
  // Should return an array of Picture objects matching the query when a valid query and userId are provided
  test("should return an array of Picture objects matching the query when a valid query and userId are provided", async () => {
    // Arrange
    const query = "test";
    const userId = 1;

    // Act
    const result = await searchQueryGalleryPictures({ query, userId });

    // Assert
    expect(Array.isArray(result)).toBe(true);
    expect(
      result.every(
        (picture) =>
          picture.title.includes(query) || picture.description.includes(query)
      )
    ).toBe(true);
  });

  // Should return an empty array when no pictures match the query
  test("should return an empty array when no pictures match the query", async () => {
    // Arrange
    const query = "nonexistent";
    const userId = 1;

    // Act
    const result = await searchQueryGalleryPictures({ query, userId });

    // Assert
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  // Should return an empty array when the gallery is empty
  test("should return an empty array when the gallery is empty", async () => {
    // Arrange
    const query = "test";
    const userId = 2;

    // Act
    const result = await searchQueryGalleryPictures({ query, userId });

    // Assert
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  // Should handle a null gallery object returned from findUserGallery function
  test("should handle a null gallery object returned from findUserGallery function", async () => {
    // Arrange
    const query = "test";
    const userId = 3;

    // Act
    const result = await searchQueryGalleryPictures({ query, userId });

    // Assert
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  // Should handle a null gallery id returned from findUserGallery function
  test("should handle a null gallery id returned from findUserGallery function", async () => {
    // Arrange
    const query = "test";
    const userId = 4;

    // Act
    const result = await searchQueryGalleryPictures({ query, userId });

    // Assert
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  // Should handle a null picture array returned from picture.findMany function
  test("should handle a null picture array returned from picture.findMany function", async () => {
    // Arrange
    const query = "test";
    const userId = 5;

    // Act
    const result = await searchQueryGalleryPictures({ query, userId });

    // Assert
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
});
