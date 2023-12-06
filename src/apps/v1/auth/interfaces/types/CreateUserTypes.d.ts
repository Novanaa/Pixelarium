export enum UserType {
  User = "User",
  Admin = "Admin",
  Owner = "Owner",
}

type TCreateUser = {
  name: string;
  email: string | null;
  picture: string;
  type: UserType;
  site_admin: boolean;
  bio: string;
};

export default TCreateUser;
