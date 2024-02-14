import slugify from "slugify";

/**
 * Generates a slugified version of a username.
 *
 * @param name - The username to be slugified.
 * @returns The slugified version of the username.
 */
export default function slugifyUsername(name: string): string {
  return slugify(name, { lower: true, replacement: "" });
}
