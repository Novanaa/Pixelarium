import * as path from "path";
import { PrismaService } from "@/libs/prisma.service";
import { HttpStatus, Injectable } from "@nestjs/common";
import { DeleteUserResponseDto } from "../dtos/delete-user.dto";
import { FileSystemService } from "@/libs/file-system.service";
import { RetrieveUserService } from "./retrieve-user.service";
import { RetrieveUserResponseDto } from "../dtos/retrieve-user.dto";
import { StaticDirectorySerive } from "@/common/static-directory.service";

@Injectable()
export class DeleteUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileSystem: FileSystemService,
    private readonly retrieveUserService: RetrieveUserService,
    private readonly staticDirectory: StaticDirectorySerive
  ) {}

  public async deleteSingleUser(name: string): Promise<void> {
    await this.prisma.user.delete({ where: { name } });
  }

  public async deleteUser(name: string): Promise<DeleteUserResponseDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    const filename: string = path.basename(user.avatar);
    const dirpath: string =
      this.staticDirectory.getUserAvatarDirectory(filename);

    this.fileSystem.deleteFile(dirpath);

    await this.deleteSingleUser(name);

    return {
      deleted_user: user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
