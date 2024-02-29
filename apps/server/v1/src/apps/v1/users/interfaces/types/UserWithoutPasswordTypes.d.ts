import { User } from "../../../../../../packages/prisma/generated/client";

type UserWithoutPassword = Omit<User, "password">;

export default UserWithoutPassword;
