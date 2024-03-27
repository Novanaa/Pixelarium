import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import {
  UpdateUserRequestDto,
  UpdateUserResponsetDto,
} from "./providers/update-user/update-user.dto";
import { PrismaProvider } from "@/libs/providers/prisma-client/prisma.provider";
import { RetrieveUserProvider } from "./providers/retrieve-user/retrieve-user.provider";
import { RetrieveUserResponseDto } from "./providers/retrieve-user/retrieve-user.dto";
import { DeleteUserResponseDto } from "./providers/delete-user/delete-user.dto";
import { DeleteUserProvider } from "./providers/delete-user/delete-user.provider";
import { UpdateUserProvider } from "./providers/update-user/update-user.provider";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("user")
export class UserController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly deleteUserService: DeleteUserProvider,
    private readonly updateUserService: UpdateUserProvider
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

  @Patch("/:name")
  @Header("Content-Type", "application/json")
  @UseInterceptors(FileInterceptor("avatar"))
  @HttpCode(HttpStatus.OK)
  public async updateUser(
    @Param("name") name: string,
    @Body() payload: UpdateUserRequestDto,
    @UploadedFile() avatar: Express.Multer.File
  ): Promise<UpdateUserResponsetDto> {
    try {
      return await this.updateUserService.updateUser({ name, payload, avatar });
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
