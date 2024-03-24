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
import { RetrieveUserService } from "./services/retrieve-user.service";
import { RetrieveUserResponseDto } from "./dtos/retrieve-user.dto";
import { DeleteUserResponseDto } from "./dtos/delete-user.dto";
import { DeleteUserService } from "./services/delete-user.service";

@Controller("user")
export class UserController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserService: RetrieveUserService,
    private readonly deleteUserService: DeleteUserService
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
