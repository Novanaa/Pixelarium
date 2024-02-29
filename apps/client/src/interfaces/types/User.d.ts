import UserType from "./UserType";

type User = {
  id: number;
  provider_id: number;
  name: string;
  email: string | null;
  password: string | null;
  picture: string;
  type: UserType;
  bio: string;
  site_admin: boolean;
  is_member: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default User;
