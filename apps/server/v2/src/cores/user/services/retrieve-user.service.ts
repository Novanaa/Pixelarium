import { PrismaService } from "@/libs/prisma.service";
import { Injectable, NotFoundException, HttpStatus } from "@nestjs/common";
import { User } from "@prisma/client";
import { ErrorProvider } from "@/common/providers/error/error.provider";
import { RetrieveUserResponseDto } from "../dtos/retrieve-user.dto";

@Injectable()
export class RetrieveUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly error: ErrorProvider
  ) {}

  public async retrieveUserByName(name: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { name } });
  }

  public async retrieveSingleUser(
    name: string
  ): Promise<RetrieveUserResponseDto> {
    const user: Awaited<User> = await this.retrieveUserByName(name);

    if (!user) throw new NotFoundException(this.error.notFound());

    delete user.email;
    delete user.password;

    return {
      user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
