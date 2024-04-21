import { HttpStatus, Injectable } from "@nestjs/common";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserClientCredentialsKeysResponseDto } from "./retrieve-credentials.dto";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { ClientKey } from "@prisma/client";
import { ClientKeysRepository } from "../../client-keys.repository";

@Injectable()
export class RetrieveUserClientCredentialsKeysProvider {
  constructor(
    private readonly retrieveUser: RetrieveUserProvider,
    private readonly clientKeysRepo: ClientKeysRepository
  ) {}

  public async retrieveCredentials(
    name: string
  ): Promise<RetrieveUserClientCredentialsKeysResponseDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUser.retrieveSingleUser(name);

    const userCredentialsKeys: Awaited<ClientKey> =
      await this.clientKeysRepo.findByUserId(user.id);

    return {
      credentials_keys: userCredentialsKeys,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
