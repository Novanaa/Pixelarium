import {
  ForbiddenException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { User } from "@prisma/client";
import { jwtDecode } from "jwt-decode";
import { Cookies } from "@/model/app.model";
import { Request, Response } from "express";
import { ErrorProvider } from "@/common/providers";
import { LogoutUserResponseDto } from "./logout.dto";

@Injectable()
export class LogoutProvider {
  constructor(private readonly error: ErrorProvider) {}

  private clearCookies(cookies: Cookies, res: Response) {
    if (cookies.session) res.clearCookie("session");
    if (cookies.logged_as) res.clearCookie("logged_as");
    if (cookies.logged_in) res.clearCookie("logged_in");
  }

  public logoutUser(req: Request, res: Response): LogoutUserResponseDto {
    let user: User;
    const cookies: Cookies = req.cookies as Cookies;

    if (!cookies || !cookies.session)
      throw new UnauthorizedException(this.error.unauthorized());

    try {
      user = jwtDecode(cookies.session);
    } catch (err) {
      throw new ForbiddenException(
        this.error.forbidden("Invalid user credentials information!")
      );
    }

    this.clearCookies(cookies, res);

    return {
      logouted_user: user,
      removed_cookies: ["session", "logged_as", "logged_in"],
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
