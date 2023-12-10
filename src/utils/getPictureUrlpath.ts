import getPictureFilepath from "./getPictureFilepath";
import type UsageType from "../interfaces/types/UsageTypes";
import { Request } from "express";

export default function getPictureUrlpath({
  request,
  usage,
  filename,
}: {
  request: Request;
  usage: UsageType;
  filename: string;
}): string {
  const pictureFilepath: string = getPictureFilepath({ usage: usage });

  const urlpath: string = `${request.protocol}://${request.get(
    "host"
  )}/${pictureFilepath}/${filename}`;

  return urlpath;
}
