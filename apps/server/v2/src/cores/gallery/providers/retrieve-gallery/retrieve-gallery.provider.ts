import { HttpStatus, Injectable } from "@nestjs/common";
import { RetrieveUserGalleryResponseDto } from "./retrieve-gallery.dto";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { Gallery, Picture } from "@prisma/client";
import { GalleryRepository } from "../../gallery.repository";
import { PictureRepository } from "@/cores/picture/picture.repository";

@Injectable()
export class RetrieveUserGalleryProvider {
  constructor(
    private readonly galleryRepo: GalleryRepository,
    private readonly pictureRepo: PictureRepository,
    private readonly retrieveUserService: RetrieveUserProvider
  ) {}

  public async retrieveUserGallery(
    name: string
  ): Promise<RetrieveUserGalleryResponseDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    const userGallery: Awaited<Gallery> =
      await this.galleryRepo.findUniqueByUserId(user.id);

    const userGalleryPictures: Awaited<Array<Picture>> =
      await this.pictureRepo.findManyByGalleryId(userGallery.id);

    return {
      user_gallery: { ...userGallery, pictures: userGalleryPictures },
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
