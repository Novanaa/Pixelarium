import defaultUserAlbumThumbnail from "../../../../const/readonly/defaultUserAlbumThumbnail";

/**
 * Returns a random default user album thumbnail URL.
 *
 * @returns {string} The URL of a random default user album thumbnail.
 */
export default function getDefaultUserAlbumThumbnail(): string {
  const randomNumber: number = Math.floor(
    Math.random() * defaultUserAlbumThumbnail.length
  );

  return defaultUserAlbumThumbnail[randomNumber];
}
