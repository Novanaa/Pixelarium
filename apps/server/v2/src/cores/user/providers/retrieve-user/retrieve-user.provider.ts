import { User } from "@prisma/client";
import { Injectable, NotFoundException, HttpStatus } from "@nestjs/common";
import { ErrorProvider } from "@/common/providers/error/error.provider";
import { RetrieveUserResponseDto } from "./retrieve-user.dto";
import { UserRepository } from "../../user.repository";

@Injectable()
export class RetrieveUserProvider {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly error: ErrorProvider
  ) {}

  public async retrieveSingleUser(
    name: string
  ): Promise<RetrieveUserResponseDto> {
    const user: Awaited<User> = await this.userRepo.findByName(name);

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
