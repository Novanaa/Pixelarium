import { User } from "../../../../../../generated/client";

type UserWithoutPassword = Omit<User, "password">;

export default UserWithoutPassword;
