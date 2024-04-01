import { WebResponse } from "@/model/app.model";
import { User } from "@prisma/client";

export class LogoutUserResponseDto extends WebResponse {
  logouted_user: User;
  removed_cookies: Array<string>;
}
