import { describe, expect, test } from "bun:test";
import generateMarkdownPictureLink from "../utils/generateMarkdownPictureLink";
import MarkdownLink from "../interfaces/types/MarkdownLink";

describe("generateMarkdownPictureLink", () => {
  test("should be return markdown link as a object", () => {
    const params = {
      title: "hehhe",
      url: "https://example.com",
    };
    const markdownLink: MarkdownLink = generateMarkdownPictureLink(params);

    const expectedResult: MarkdownLink = {
      tooltip_link: `![${params.title}](${params.url})`,
    };

    expect(markdownLink).toEqual(expectedResult);
  });
  test("returned markdown link should be an object", () => {
    const params = {
      title: "hehhe",
      url: "https://example.com",
    };
    const markdownLink: MarkdownLink = generateMarkdownPictureLink(params);

    const expectedResult: MarkdownLink = {
      tooltip_link: `![${params.title}](${params.url})`,
    };

    expect(markdownLink).toMatchObject(expectedResult);
  });
  test("returned markdown tooltip link should be type of string", () => {
    const params = {
      title: "hehhe",
      url: "https://example.com",
    };
    const markdownLink: MarkdownLink = generateMarkdownPictureLink(params);

    expect(markdownLink.tooltip_link).toBeString();
  });
});
