import { Injectable } from "@nestjs/common";
import { AddUserFavoritePictureResponseDTO } from "./add-favorite-picture.dto";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";

@Injectable()
export class AddUserFavoritePictureProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserService: RetrieveUserProvider
  ) {}

  public async AddFavoritePictureList(
    name: string,
    pictureId: string
  ): Promise<AddUserFavoritePictureResponseDTO> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    console.log(user);
    console.log(pictureId);

    return null;
  }
}
