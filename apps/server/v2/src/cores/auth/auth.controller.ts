import { GoogleProvider } from "@/libs/providers";
import {
  Controller,
  Get,
  HttpCode,
  HttpRedirectResponse,
  HttpStatus,
  Redirect,
} from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor(private readonly google: GoogleProvider) {}

  @Redirect()
  @Get("/google")
  @HttpCode(HttpStatus.MOVED_PERMANENTLY)
  public loginWithGoogle(): HttpRedirectResponse {
    return {
      statusCode: HttpStatus.MOVED_PERMANENTLY,
      url: this.google.getAuthenticationUrl(),
    };
  }
}
