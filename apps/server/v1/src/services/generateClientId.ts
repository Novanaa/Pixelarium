import { CryptoHasher } from "bun";
import newHasher from "../utils/hasher";

/**
 * Generate a client ID using the given provider ID.
 * The client ID is a string in the format 'pxlmid-{hashed provider ID}'.
 *
 * @param providerId - The provider ID.
 * @returns The generated client ID.
 */
export default function generateClientId(providerId: number): string {
  // Create a new hash instance using the 'md5' algorithm.
  const hasher: CryptoHasher = newHasher("md5");
  // Hash the provider ID and convert it to a hexadecimal string.
  const hashedId: string = hasher.update(String(providerId)).digest("hex");
  // Generate the client ID by concatenating the string 'pxlmid-' with the hashed provider ID.
  const clientId: string = `pxlmid-${hashedId}`;

  // Return the generated client ID.
  return clientId;
}
