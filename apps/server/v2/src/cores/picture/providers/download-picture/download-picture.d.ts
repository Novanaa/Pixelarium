import { Response } from "express";

export interface DownloadPictureParam {
  pictureId: string;
  httpResponse: Response;
}
