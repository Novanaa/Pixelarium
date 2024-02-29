import { SupportedCryptoAlgorithms } from "bun";

/**
 * A factory function to create a new Bun.CryptoHasher instance.
 *
 * @param alg - The cryptographic algorithm to use for hashing.
 * @returns A new Bun.CryptoHasher instance configured to use the specified algorithm.
 */
export default function newHasher(alg: SupportedCryptoAlgorithms) {
  const hasher = new Bun.CryptoHasher(alg);

  return hasher;
}
