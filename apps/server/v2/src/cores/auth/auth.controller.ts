import {
  Controller,
  Get,
  HttpCode,
  HttpRedirectResponse,
  HttpStatus,
  Query,
  Redirect,
} from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers";
import { GoogleAuthProvider } from "./providers/google/google.provider";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly googleService: GoogleAuthProvider
  ) {}

  @Redirect()
  @Get("/google")
  @HttpCode(HttpStatus.MOVED_PERMANENTLY)
  public loginWithGoogle(): HttpRedirectResponse {
    return this.googleService.loginWithGoogle();
  }

  @Redirect()
  @Get("/google/callback")
  @HttpCode(HttpStatus.MOVED_PERMANENTLY)
  public async googleAuthenticationCallback(
    @Query("code") code: string
  ): Promise<HttpRedirectResponse> {
    try {
      return await this.googleService.authenticationCallback(code);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
