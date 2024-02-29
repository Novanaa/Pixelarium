/**
 * Returns the source of the logo based on the provided theme.
 *
 * @param {string} theme - The theme of the logo. Possible values are "light" or "dark".
 * @returns {string} - The source of the logo image.
 */
export default function getLogoSource(theme: string): string {
  return theme == "light"
    ? "/img/icons/pixelarium-light.png"
    : "/img/icons/pixelarium-dark.png";
}
