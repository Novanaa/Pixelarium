import { HttpStatus, Injectable } from "@nestjs/common";
import { AddUserFavoritePictureResponseDTO } from "./add-favorite-picture.dto";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { RetrieveUserPictureProvider } from "@/cores/picture/providers";
import { RetrieveUserPictureResponseDTO } from "@/cores/picture/providers/retrieve-picture/retrieve-picture.dto";

@Injectable()
export class AddUserFavoritePictureProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly retrieveUserPictureService: RetrieveUserPictureProvider
  ) {}

  public async insertPictureToUserFavoriteList(
    userId: string,
    pictureId: string
  ): Promise<void> {
    await this.prisma.favorite.update({
      where: { user_id: userId },
      data: { pictures: { connect: { id: pictureId } } },
    });
  }

  public async AddFavoritePictureList(
    name: string,
    pictureId: string
  ): Promise<AddUserFavoritePictureResponseDTO> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    const { picture }: Awaited<RetrieveUserPictureResponseDTO> =
      await this.retrieveUserPictureService.retrievePicture(pictureId);

    await this.insertPictureToUserFavoriteList(user.id, picture.id);

    return {
      added_picture: picture,
      owner: user,
      code: HttpStatus.CREATED,
      status: "OK",
    };
  }
}
