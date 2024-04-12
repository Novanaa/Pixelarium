import { WebResponse } from "@/model/app.model";
import { Picture } from "@prisma/client";

export class RetrieveUserPictureResponseDTO extends WebResponse {
  picture: Picture;
}
