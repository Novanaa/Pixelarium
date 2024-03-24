import { WebResponse } from "@/model/app.model";
import { User } from "@prisma/client";

export class RetrieveUserResponseDto extends WebResponse {
  user: User;
}
