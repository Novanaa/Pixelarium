import { SupportedCryptoAlgorithms } from "bun";

export default function newHasher(alg: SupportedCryptoAlgorithms) {
  const hasher = new Bun.CryptoHasher(alg);

  return hasher;
}
