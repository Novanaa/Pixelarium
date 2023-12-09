type TCreateUser = {
  providerId: bigint;
  name: string;
  email: string | null;
  picture: string;
  bio: string;
};

export default TCreateUser;
