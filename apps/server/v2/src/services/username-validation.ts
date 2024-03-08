import { validateUsername } from "@digitalcube/username-validator";

/**
 * The function `usernameValidation` in TypeScript asynchronously validates a username and returns
 * either void or an error message.
 * @param {string} name - The `name` parameter in the `usernameValidation` function is a string
 * representing the username that needs to be validated.
 * @returns The `usernameValidation` function is returning a Promise that resolves to either a string
 * or void. If the `validateUsername` function is successful, it will return void. If an error occurs
 * during the validation process, the function will catch the error, extract the error message, and
 * return it as a string.
 */
export default async function usernameValidation(
  name: string
): Promise<string | void> {
  try {
    if (/[A-Z]/.test(name))
      return "Username with uppercase letter should not allowed, please choose another username.";

    if (/\d/.test(name))
      return "Username with numberic number should not allowed, please choose another username.";

    return (await validateUsername(name)) satisfies void;
  } catch (error) {
    const err: Error = error as Error;
    return err.message;
  }
}
