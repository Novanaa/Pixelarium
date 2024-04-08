import { Injectable } from "@nestjs/common";
import { UnfavoritePictureResponseDTO } from "./unfavorite.dto";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";

@Injectable()
export class UnfavoritePictureProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserService: RetrieveUserProvider
  ) {}

  public async unfavPicture(
    name: string,
    pictureId: string
  ): Promise<UnfavoritePictureResponseDTO> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    console.log(user);
    console.log(pictureId);

    return null;
  }
}
