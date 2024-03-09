import moment from "moment";
import slugify from "slugify";

/**
 * The function `prettifyFilename` takes a filename as input, converts it to lowercase, appends the
 * current date and time, and returns the prettified filename.
 * @param {string} filename - The `prettifyFilename` function takes a `filename` as a parameter, which
 * is a string representing the name of a file.
 * @returns The function `prettifyFilename` takes a `filename` as input, converts it to lowercase,
 * extracts the basename before the first dot, and then appends the current date and time in a specific
 * format. The returned value is a string that combines the basename, current date, and current time
 * separated by hyphens.
 */
export default function prettifyFilename(filename: string): string {
  const now: number = new Date().getTime();
  const basename: string = slugify(filename.toLowerCase().split(".")[0]);
  const date: string = slugify(moment(now).format("LL"), { lower: true });
  const time: string = slugify(moment(now).format("LTS").replace(/:/g, "-"));

  const prettified: string = `${basename}-${date}-${time}`;

  return prettified;
}
