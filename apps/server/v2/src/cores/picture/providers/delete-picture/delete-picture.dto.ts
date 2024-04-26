import { Picture } from "@prisma/client";
import { WebResponse } from "@/model/app.model";

export class DeletePictureResponseDTO extends WebResponse {
  deleted_picture: Picture;
}
