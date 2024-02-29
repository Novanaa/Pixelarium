/**
 * The function 'createSecretClientPattern' takes in an object with 'name' and 'token' as parameters.
 * It creates a unique client secret pattern using these parameters.
 *
 * @param {{
 *   name: string;
 *   token: string;
 * }} params - The 'params' object contains the 'name' and 'token' of the client.
 *
 * @returns {string} - The function returns the client secret pattern.
 */
export default function createSecretClientPattern({
  name,
  token,
}: {
  name: string;
  token: string;
}): string {
  const clientSecretPattern: string = `${name}.${token}`;

  return clientSecretPattern;
}
