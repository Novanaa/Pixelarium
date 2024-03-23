import { WebResponse } from "@/model/app.model";
import { User } from "@prisma/client";

export class RetrieveUserResponse extends WebResponse {
  user: User;
}
