import { HttpStatus, Injectable } from "@nestjs/common";
import { RetrieveUserGalleryResponseDto } from "./retrieve-gallery.dto";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { Gallery, Picture } from "@prisma/client";
import { GalleryRepository } from "../../gallery.repository";

@Injectable()
export class RetrieveUserGalleryProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly galleryRepo: GalleryRepository
  ) {}

  public async retrieveUserGalleryPictures(
    galleryId: string
  ): Promise<Array<Picture>> {
    return await this.prisma.picture.findMany({
      where: { gallery_id: galleryId },
    });
  }

  public async retrieveUserGallery(
    name: string
  ): Promise<RetrieveUserGalleryResponseDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    const userGallery: Awaited<Gallery> =
      await this.galleryRepo.findUniqueByUserId(user.id);

    const userGalleryPictures: Awaited<Array<Picture>> =
      await this.retrieveUserGalleryPictures(userGallery.id);

    return {
      user_gallery: { ...userGallery, pictures: userGalleryPictures },
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
