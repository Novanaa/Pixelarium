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
  Req,
  Res,
} from "@nestjs/common";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  LogoutProvider,
  TokenizerProvider,
} from "./providers";
import { Cookies } from "@/model/app.model";
import { Request, Response } from "express";
import { PrismaProvider } from "@/libs/providers";
import { LogoutUserResponseDto } from "./providers/logout/logout.dto";
import { TokenizerResponseDto } from "./providers/tokenizer/tokenizer.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly googleService: GoogleAuthProvider,
    private readonly githubService: GithubAuthProvider,
    private readonly logoutService: LogoutProvider,
    private readonly tokenizerService: TokenizerProvider
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

  @Post("/logout")
  @HttpCode(HttpStatus.OK)
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  public logoutUser(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ): LogoutUserResponseDto {
    return this.logoutService.logoutUser(req, res);
  }

  @Get("/tokenizer")
  @HttpCode(HttpStatus.OK)
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  public tokenizer(@Req() req: Request): TokenizerResponseDto {
    const cookies: Cookies = req.cookies as Cookies;

    return this.tokenizerService.generate(cookies.session);
  }
}
