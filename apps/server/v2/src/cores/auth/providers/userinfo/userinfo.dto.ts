export class UserInfoCreateUserDto {
  bio?: string | null;
  avatar: string | null;
  name: string;
  email: string | null;
  originCode: number;
}
