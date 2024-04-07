import { verify, Jwt } from "jsonwebtoken";
import {
  ForbiddenException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { TokenizerResponseDto } from "./tokenizer.dto";
import { ErrorProvider } from "@/common/providers";
import { UserInfoProvider } from "../userinfo/userinfo.provider";
import { Environment } from "@/configs";
import { UserPayload } from "./tokenizer";
import { UserInfoGenerateCredentials } from "../userinfo/userinfo";
import { Cookies } from "@/model/app.model";

@Injectable()
export class TokenizerProvider {
  constructor(
    private readonly error: ErrorProvider,
    private readonly userinfo: UserInfoProvider
  ) {}

  private verifyCredentials(session: string): Jwt {
    try {
      return verify(session, Environment.JSONWEBTOKEN.REFRESH_TOKEN, {
        complete: true,
      });
    } catch (err) {
      throw new ForbiddenException(this.error.forbidden());
    }
  }

  public generate(cookies: Cookies): TokenizerResponseDto {
    const session: string = cookies?.session;
    if (!session) throw new UnauthorizedException(this.error.unauthorized());

    const verifyCredentials: Jwt = this.verifyCredentials(session);
    const user: UserPayload = verifyCredentials.payload as UserPayload;

    delete user.iat;
    delete user.exp;

    const userCredentials: UserInfoGenerateCredentials =
      this.userinfo.generateCredentials(user);
    const now: number = new Date().getTime();
    const expiresTime: number = now + 30 * 60 * 1000;

    return {
      credentials: {
        access_token: userCredentials.accessToken,
        expires_in: expiresTime,
      },
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
