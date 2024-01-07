import getPictureFilepath from "./getPictureFilepath";
import type UsageType from "../interfaces/types/UsageTypes";
import { Request } from "express";

/**
 * The function `getPictureUrlpath` takes in a request, usage type, and filename, and returns the URL
 * path for a picture file
 * @export
 * @param {{
 *   request: Request;
 *   usage: UsageType;
 *   filename: string;
 * }} {
 *   request,
 *   usage,
 *   filename,
 * }
 * @returns a string, which is the URL path for a picture file.
 */
export default function getPictureUrlpath({
  request,
  usage,
  filename,
  name,
}: {
  request: Request;
  usage: UsageType;
  filename: string;
  name?: string;
}): string {
  const pictureFilepath: string = getPictureFilepath({ usage, name });

  const urlpath: string = `${request.protocol}://${request.get(
    "host"
  )}/${pictureFilepath}/${filename}`;

  return urlpath;
}
