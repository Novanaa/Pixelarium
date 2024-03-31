import {
  BadRequestException,
  ForbiddenException,
  HttpRedirectResponse,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { Auth } from "googleapis";
import { User } from "@prisma/client";
import { jwtDecode } from "jwt-decode";
import { GoogleUserInfo } from "./google.dto";
import { GoogleProvider } from "@/libs/providers";
import { ErrorProvider } from "@/common/providers";
import { UserInfoProvider } from "../userinfo/userinfo.provider";
import { Response } from "express";
import { UserInfoCreateUserDto } from "../userinfo/userinfo.dto";
import { UserInfoGenerateCredentials } from "../userinfo/userinfo";

@Injectable()
export class GoogleAuthProvider {
  constructor(
    private readonly google: GoogleProvider,
    private readonly error: ErrorProvider,
    private readonly userInfo: UserInfoProvider
  ) {}

  public loginWithGoogle(): HttpRedirectResponse {
    return {
      url: this.google.getAuthenticationUrl(),
      statusCode: HttpStatus.MOVED_PERMANENTLY,
    };
  }

  public async authenticationCallback(
    res: Response,
    code: string
  ): Promise<HttpRedirectResponse> {
    const googleClient: Auth.OAuth2Client = this.google.getClient();
    const responseToken = await googleClient.getToken(code);

    if (!responseToken.tokens)
      throw new InternalServerErrorException(this.error.internalServerError());

    const userinfo: GoogleUserInfo = jwtDecode(
      responseToken.tokens.id_token
    ) satisfies GoogleUserInfo;

    if (!userinfo)
      throw new BadRequestException(
        this.error.badRequest("The authentication session was failed!")
      );

    const now: number = new Date().getTime();
    if (now > responseToken.tokens.expiry_date)
      throw new ForbiddenException(
        this.error.forbidden("Your authentication session was over!")
      );

    const userOriginCode: number = Number(userinfo.sub) / Number(10n ** 13n);
    const user: Awaited<User> =
      await this.userInfo.retrieveUserByOriginCode(userOriginCode);

    const userinfoPayload: UserInfoCreateUserDto = {
      avatar: userinfo.picture,
      email: userinfo.email,
      name: userinfo.name,
      originCode: userOriginCode,
    } satisfies UserInfoCreateUserDto;

    if (!user) {
      const createdUser: Awaited<User> =
        await this.userInfo.createUser(userinfoPayload);

      const userinfoCredentials: UserInfoGenerateCredentials =
        this.userInfo.generateCredentials(createdUser);

      this.userInfo.generateResponseCookie({
        res,
        session: userinfoCredentials.refreshToken,
        username: createdUser.name,
      });

      return {
        url: this.userInfo.generateRedirectURL(userinfoCredentials.accessToken),
        statusCode: HttpStatus.MOVED_PERMANENTLY,
      };
    }

    const userinfoCredentials: UserInfoGenerateCredentials =
      this.userInfo.generateCredentials(user);

    this.userInfo.generateResponseCookie({
      res,
      session: userinfoCredentials.refreshToken,
      username: user.name,
    });

    return {
      url: this.userInfo.generateRedirectURL(userinfoCredentials.accessToken),
      statusCode: HttpStatus.MOVED_PERMANENTLY,
    };
  }
}
