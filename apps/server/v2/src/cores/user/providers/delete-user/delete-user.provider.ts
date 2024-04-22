import * as fs from "fs";
import * as path from "path";
import { HttpStatus, Injectable } from "@nestjs/common";
import { DeleteUserResponseDto } from "./delete-user.dto";
import { RetrieveUserProvider } from "../retrieve-user/retrieve-user.provider";
import { RetrieveUserResponseDto } from "../retrieve-user/retrieve-user.dto";
import { StaticDirectoryProvider } from "@/common/providers/static-directoty/static-directory.provider";
import { UserRepository } from "../../user.repository";

@Injectable()
export class DeleteUserProvider {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly staticDirectory: StaticDirectoryProvider
  ) {}

  public async deleteUser(name: string): Promise<DeleteUserResponseDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    const filename: string = path.basename(user.avatar);
    const dirpath: string =
      this.staticDirectory.getUserAvatarDirectory(filename);

    if (fs.existsSync(dirpath)) fs.unlinkSync(dirpath);

    await this.userRepo.deleteByName(name);

    return {
      deleted_user: user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
