import { HttpStatus, Injectable } from "@nestjs/common";
import { PictureRepository } from "../../picture.repository";
import {
  DeletePictureResponseDTO,
  RemovesPicturesResponseDTO,
} from "./delete-picture.dto";
import { RetrieveUserPictureProvider } from "../retrieve-picture/retrieve-picture.provider";
import { RetrieveUserPictureResponseDTO } from "../retrieve-picture/retrieve-picture.dto";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { GalleryRepository } from "@/cores/gallery/gallery.repository";
import { Gallery } from "@prisma/client";

@Injectable()
export class DeletePictureProvider {
  constructor(
    private readonly pictureRepo: PictureRepository,
    private readonly retrievePictureService: RetrieveUserPictureProvider,
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly galleryRepo: GalleryRepository
  ) {}

  public async deletePicture(
    pictureId: string
  ): Promise<DeletePictureResponseDTO> {
    const { picture }: Awaited<RetrieveUserPictureResponseDTO> =
      await this.retrievePictureService.retrievePicture(pictureId);

    await this.pictureRepo.deletePicture(picture.id);

    return {
      deleted_picture: picture,
      code: HttpStatus.OK,
      status: "OK",
    };
  }

  public async RemovesPictures(
    name: string
  ): Promise<RemovesPicturesResponseDTO> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    const userGallery: Awaited<Gallery> =
      await this.galleryRepo.findUniqueByUserId(user.id);

    await this.pictureRepo.removesPictures(userGallery.id);

    return {
      owner: user,
      gallery: { ...userGallery, pictures: [] },
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
