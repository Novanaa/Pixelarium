import { WebResponse } from "@/model/app.model";
import { User } from "@prisma/client";

export class DeleteUserResponse extends WebResponse {
  deleted_user: User;
}
