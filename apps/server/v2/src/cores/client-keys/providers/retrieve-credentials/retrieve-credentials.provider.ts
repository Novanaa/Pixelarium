import { HttpStatus, Injectable } from "@nestjs/common";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserClientCredentialsKeysResponseDto } from "./retrieve-credentials.dto";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { ClientKey } from "@prisma/client";
import { PrismaProvider } from "@/libs/providers";

@Injectable()
export class RetrieveUserClientCredentialsKeysProvider {
  constructor(
    private readonly retrieveUser: RetrieveUserProvider,
    private readonly prisma: PrismaProvider
  ) {}

  public async retrieveUserClientKeys(userId: string): Promise<ClientKey> {
    return await this.prisma.clientKey.findUnique({
      where: { user_id: userId },
    });
  }

  public async retrieveCredentials(
    name: string
  ): Promise<RetrieveUserClientCredentialsKeysResponseDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUser.retrieveSingleUser(name);

    const userCredentialsKeys: Awaited<ClientKey> =
      await this.retrieveUserClientKeys(user.id);

    return {
      credentials_keys: userCredentialsKeys,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
