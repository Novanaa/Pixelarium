import { User } from "@prisma/client";
import { PrismaProvider } from "@/libs/providers/prisma-client/prisma.provider";
import { Injectable, NotFoundException, HttpStatus } from "@nestjs/common";
import { ErrorProvider } from "@/common/providers/error/error.provider";
import { RetrieveUserResponseDto } from "./retrieve-user.dto";

@Injectable()
export class RetrieveUserProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly error: ErrorProvider
  ) {}

  public async retrieveUserByName(name: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { name } });
  }

  public async retrieveUserByOriginCode(origin_code: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { origin_code } });
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
