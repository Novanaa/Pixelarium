import { describe, test, expect } from "bun:test";
import generateHtmlPictureLink from "../utils/generateHtmlPictureLink";
import HtmlLink from "../interfaces/types/HtmlLink";

describe("generateHtmlPictureLink", () => {
  test("should be return Html Link as a Object", () => {
    const params = {
      title: "heheh",
      url: "hihihiha",
      options: {
        imageWidth: 1000,
        imageHeight: 1000,
      },
    };

    const htmlLink: HtmlLink = generateHtmlPictureLink(params);

    console.log(htmlLink);
    expect(htmlLink).toBeDefined();
  });
  test("returned html object should be included anchor link", () => {
    const params = {
      title: "heheh",
      url: "hihihiha",
      options: {
        imageWidth: 1000,
        imageHeight: 1000,
      },
    };

    const htmlLink: HtmlLink = generateHtmlPictureLink(params);

    console.log(htmlLink.anchor_link);
    expect(htmlLink.anchor_link).toBeDefined();
  });
  test("returned html object should be included anchor link and type of string", () => {
    const params = {
      title: "heheh",
      url: "hihihiha",
      options: {
        imageWidth: 1000,
        imageHeight: 1000,
      },
    };

    const htmlLink: HtmlLink = generateHtmlPictureLink(params);

    console.log(htmlLink.anchor_link);
    expect(htmlLink.anchor_link).toBeDefined();
    expect(htmlLink.anchor_link).toBeString();
  });
  test("returned html object should be included image link", () => {
    const params = {
      title: "heheh",
      url: "hihihiha",
      options: {
        imageWidth: 1000,
        imageHeight: 1000,
      },
    };

    const htmlLink: HtmlLink = generateHtmlPictureLink(params);

    console.log(htmlLink.img_link);
    expect(htmlLink.img_link).toBeDefined();
  });
  test("returned html object should be included image link and type of string", () => {
    const params = {
      title: "heheh",
      url: "hihihiha",
      options: {
        imageWidth: 1000,
        imageHeight: 1000,
      },
    };

    const htmlLink: HtmlLink = generateHtmlPictureLink(params);

    console.log(htmlLink.img_link);
    expect(htmlLink.img_link).toBeDefined();
    expect(htmlLink.img_link).toBeString();
  });
});
