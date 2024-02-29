import getPictureFilepath from "./getPictureFilepath";
import type UsageType from "../interfaces/types/UsageTypes";
import { Request } from "express";

type GetPictureUrlpathParams = {
  request: Request;
  usage: UsageType;
  filename: string;
  name?: string;
  albumName?: string;
};

/**
 * Generates the URL path for a picture based on the provided parameters.
 *
 * @param request - The Express request object.
 * @param usage - The usage type of the picture.
 * @param filename - The name of the picture file.
 * @param name - (Optional) The name associated with the picture.
 * @param albumName - (Optional) The album name associated with the picture.
 * @returns The URL path for the picture.
 */
export default function getPictureUrlpath({
  request,
  usage,
  filename,
  name,
  albumName,
}: GetPictureUrlpathParams): string {
  const pictureFilepath: string = getPictureFilepath({
    usage,
    name,
    albumName,
  });

  const urlpath: string = `${request.protocol}://${request.get(
    "host"
  )}/${pictureFilepath}/${filename}`;

  return urlpath;
}
