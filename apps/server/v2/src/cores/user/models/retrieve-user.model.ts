import { WebResponse } from "@/model/app.model";
import { User } from "prisma/generated/client";

export class RetrieveUserResponse extends WebResponse {
  user: User;
}
