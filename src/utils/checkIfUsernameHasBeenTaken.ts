import client from "../libs/configs/prisma";

type TUser = {
  name: string;
};

export default async function checkIfUsernameHasBeenTaken(name: string) {
  const user: Awaited<TUser | null> = await client.user.findUnique({
    where: { name },
    select: { name: true },
  });

  if (!user) return false;

  return user?.name.includes(name);
}
