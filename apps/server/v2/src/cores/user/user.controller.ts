import {
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers/prisma/prisma.provider";
import { RetrieveUserProvider } from "./providers/retrieve-user/retrieve-user.provider";
import { RetrieveUserResponseDto } from "./providers/retrieve-user/retrieve-user.dto";
import { DeleteUserResponseDto } from "./providers/delete-user/delete-user.dto";
import { DeleteUserProvider } from "./providers/delete-user/delete-user.provider";

@Controller("user")
export class UserController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly deleteUserService: DeleteUserProvider
  ) {}

  @Get("/:name")
  @Header("Content-Type", "application/json")
  @HttpCode(HttpStatus.OK)
  public async retrieveUser(
    @Param("name") name: string
  ): Promise<RetrieveUserResponseDto> {
    try {
      return await this.retrieveUserService.retrieveSingleUser(name);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  @Delete("/:name")
  @Header("Content-Type", "application/json")
  @HttpCode(HttpStatus.OK)
  public async deleteUser(
    @Param("name") name: string
  ): Promise<DeleteUserResponseDto> {
    try {
      return await this.deleteUserService.deleteUser(name);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
