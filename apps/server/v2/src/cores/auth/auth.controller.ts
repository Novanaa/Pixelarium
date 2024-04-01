import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  HttpStatus,
  Post,
  Query,
  Redirect,
  Res,
} from "@nestjs/common";
import { Response } from "express";
import { PrismaProvider } from "@/libs/providers";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  LogoutProvider,
} from "./providers";
import { LogoutUserResponseDto } from "./providers/logout/logout.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly googleService: GoogleAuthProvider,
    private readonly githubService: GithubAuthProvider,
    private readonly logoutService: LogoutProvider
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
    @Res() res: Response,
    @Query("code") code: string
  ): Promise<HttpRedirectResponse> {
    try {
      return await this.googleService.authenticationCallback(res, code);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  @Redirect()
  @Get("/github")
  @HttpCode(HttpStatus.MOVED_PERMANENTLY)
  public loginWithGithub(): HttpRedirectResponse {
    return this.githubService.loginWithGithub();
  }

  @Redirect()
  @Get("/github/callback")
  @HttpCode(HttpStatus.MOVED_PERMANENTLY)
  public async githubAuthenticationCallback(
    @Res() res: Response,
    @Query("code") code: string
  ): Promise<HttpRedirectResponse> {
    try {
      return await this.githubService.githubAuthenticationCallback(res, code);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @Header("Content-Type", "application/json")
  public async logoutUser(): Promise<LogoutUserResponseDto> {
    try {
      return await this.logoutService.logoutUser();
    } catch (err) {
      await this.prisma.$disconnect();
    }
  }
}
