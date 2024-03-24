import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { PrismaService } from "@/libs/prisma.service";
import { RetrieveUserService } from "./services/retrieve-user.service";
import { RetrieveUserResponseDto } from "./dtos/retrieve-user.dto";

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
  ): Promise<RetrieveUserResponseDto> {
    try {
      return await this.userService.retrieveSingleUser(name);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
