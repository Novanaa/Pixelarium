import { ErrorService } from "@/common/error.service";
import { PrismaService } from "@/libs/prisma.service";
import { HttpStatus, Injectable } from "@nestjs/common";
import { DeleteUserResponseDto } from "../dtos/delete-user.dto";
import { FileSystemService } from "@/libs/file-system.service";
import { RetrieveUserService } from "./retrieve-user.service";
import { RetrieveUserResponseDto } from "../dtos/retrieve-user.dto";

@Injectable()
export class DeleteUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly error: ErrorService,
    private readonly fileSystem: FileSystemService,
    private readonly retrieveUserService: RetrieveUserService
  ) {}

  public async deleteSingleUser(name: string): Promise<void> {
    await this.prisma.user.delete({ where: { name } });
  }

  public async deleteUser(name: string): Promise<DeleteUserResponseDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    return {
      deleted_user: user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
