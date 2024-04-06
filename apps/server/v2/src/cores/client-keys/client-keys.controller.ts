import { PrismaProvider } from "@/libs/providers";
import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { RetrieveUserClientCredentialsKeysProvider } from "./providers";
import { RetrieveUserClientCredentialsKeysResponseDto } from "./providers/retrieve-credentials/retrieve-credentials.dto";

@Controller("client-keys")
export class ClientKeysController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveCredentials: RetrieveUserClientCredentialsKeysProvider
  ) {}

  @Get("/:name")
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  public async retrieveUserClientCredentialsKeys(
    @Param("name") name: string
  ): Promise<RetrieveUserClientCredentialsKeysResponseDto> {
    try {
      return await this.retrieveCredentials.retrieveCredentials(name);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
