import client from "../libs/configs/prisma";

type TUser = {
  name: string;
};

/**
 * The function checks if a username has already been taken by querying the database and returning true
 * if the username exists.
 * @param {string} name - The `name` parameter is a string that represents the username that we want to
 * check if it has been taken or not.
 * @returns a boolean value. It returns `false` if the user with the given name does not exist, and it
 * returns `true` if the user with the given name exists and the name includes the given name.
 */
export default async function checkIfUsernameHasBeenTaken(name: string) {
  const user: Awaited<TUser | null> = await client.user.findUnique({
    where: { name },
    select: { name: true },
  });

  if (!user) return false;

  return user?.name.includes(name);
}
