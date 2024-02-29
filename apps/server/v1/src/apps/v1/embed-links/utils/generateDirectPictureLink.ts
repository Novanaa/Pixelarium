import DirectLink from "../interfaces/types/DirectLink";

type GenerateDirectPictureLinkParams = {
  link: string;
  url: string;
};

/**
 * Generates a direct picture link.
 *
 * @param {GenerateDirectPictureLinkParams} params - The parameters for generating the direct picture link.
 * @param {string} params.link - The link of the picture.
 * @param {string} params.url - The URL of the picture.
 * @returns {DirectLink} The generated direct picture link.
 */
export default function generateDirectPictureLink({
  link,
  url,
}: GenerateDirectPictureLinkParams): DirectLink {
  const directLink: DirectLink = {
    image_link: link,
    image_url: url,
  };

  return directLink;
}
