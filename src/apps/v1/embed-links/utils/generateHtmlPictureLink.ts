import HtmlLink from "../interfaces/types/HtmlLink";
import tag from "html-tag";

type GenerateHtmlPictureLinkParams = {
  title: string;
  url: string;
  options: GenerateHtmlPictureLinkOptions;
};

export type GenerateHtmlPictureLinkOptions = {
  imageWidth?: number;
  imageHeight?: number;
};

/**
 * Generates an HTML picture link.
 *
 * @param {GenerateHtmlPictureLinkParams} params - The parameters for generating the HTML picture link.
 * @param {string} params.title - The title of the picture link.
 * @param {string} params.url - The URL of the picture link.
 * @param {GenerateHtmlPictureLinkOptions} params.options - The options for the picture link.
 * @param {number} [params.options.imageWidth] - The width of the image in the picture link. Defaults to 100.
 * @param {number} [params.options.imageHeight] - The height of the image in the picture link. Defaults to 100.
 * @returns {HtmlLink} The generated HTML picture link.
 *
 * @typedef {Object} HtmlLink - The HTML link object.
 * @property {string} anchor_link - The HTML anchor link.
 * @property {string} img_link - The HTML image link.
 *
 * @typedef {Object} GenerateHtmlPictureLinkParams - The parameters for generating the HTML picture link.
 * @property {string} title - The title of the picture link.
 * @property {string} url - The URL of the picture link.
 * @property {GenerateHtmlPictureLinkOptions} options - The options for the picture link.
 *
 * @typedef {Object} GenerateHtmlPictureLinkOptions - The options for the picture link.
 * @property {number} [imageWidth] - The width of the image in the picture link. Defaults to 100.
 * @property {number} [imageHeight] - The height of the image in the picture link. Defaults to 100.
 */
export default function generateHtmlPictureLink({
  title,
  url,
  options,
}: GenerateHtmlPictureLinkParams): HtmlLink {
  const htmlImgLink: string = tag("img", {
    src: url,
    alt: title,
    width: options.imageWidth || 100,
    height: options.imageHeight || 100,
  });
  const htmlImgAnchorLink: string = tag("a", { href: url }, htmlImgLink);

  const htmlLink: HtmlLink = {
    anchor_link: htmlImgAnchorLink,
    img_link: htmlImgLink,
  };

  return htmlLink;
}
