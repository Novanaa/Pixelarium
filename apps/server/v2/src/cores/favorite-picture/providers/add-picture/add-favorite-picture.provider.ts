import { HttpStatus, Injectable } from "@nestjs/common";
import { AddUserFavoritePictureResponseDTO } from "./add-favorite-picture.dto";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { RetrieveUserPictureProvider } from "@/cores/picture/providers";
import { RetrieveUserPictureResponseDTO } from "@/cores/picture/providers/retrieve-picture/retrieve-picture.dto";
import { FavoritePictureRepository } from "../../favorite-picture.repository";

@Injectable()
export class AddUserFavoritePictureProvider {
  constructor(
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly retrieveUserPictureService: RetrieveUserPictureProvider,
    private readonly favoritePictureRepo: FavoritePictureRepository
  ) {}

  public async AddFavoritePictureList(
    name: string,
    pictureId: string
  ): Promise<AddUserFavoritePictureResponseDTO> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    const { picture }: Awaited<RetrieveUserPictureResponseDTO> =
      await this.retrieveUserPictureService.retrievePicture(pictureId);

    await this.favoritePictureRepo.insertPictureToUserFavoriteList(
      user.id,
      picture.id
    );

    return {
      added_picture: picture,
      owner: user,
      code: HttpStatus.CREATED,
      status: "OK",
    };
  }
}
