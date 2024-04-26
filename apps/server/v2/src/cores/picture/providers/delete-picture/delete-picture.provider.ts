import { Injectable } from "@nestjs/common";
import { PictureRepository } from "../../picture.repository";
import { DeletePictureResponseDTO } from "./delete-picture.dto";

@Injectable()
export class DeletePictureProvider {
  constructor(private readonly pictureRepo: PictureRepository) {}

  public async deletePicture(): Promise<DeletePictureResponseDTO> {
    return null;
  }
}
