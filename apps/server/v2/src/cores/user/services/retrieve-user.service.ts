import { PrismaService } from "@/libs/prisma.service";
import { Injectable, NotFoundException, HttpStatus } from "@nestjs/common";
import { User } from "@prisma/client";
import { RetrieveUserResponse } from "../models/retrieve-user.model";
import { ErrorService } from "@/common/error.service";

@Injectable()
export class RetrieveUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly error: ErrorService
  ) {}

  public async retrieveUserByName(name: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { name } });
  }

  public async retrieveSingleUser(name: string): Promise<RetrieveUserResponse> {
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
