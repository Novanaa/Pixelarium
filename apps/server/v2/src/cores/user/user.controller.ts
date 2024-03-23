import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { PrismaService } from "@/libs/prisma.service";
import { RetrieveUserResponse } from "./models/retrieve-user.model";
import { RetrieveUserService } from "./services/retrieve-user.service";

@Controller("user")
export class UserController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: RetrieveUserService
  ) {}

  @Get("/:name")
  @Header("Content-Type", "application/json")
  @HttpCode(HttpStatus.OK)
  public async retrieveUser(
    @Param("name") name: string
  ): Promise<RetrieveUserResponse> {
    try {
      return await this.userService.retrieveSingleUser(name);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
