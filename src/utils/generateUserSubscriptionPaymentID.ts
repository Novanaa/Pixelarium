import newHasher from "./hasher";
import { plan } from "../../generated/client";
import { CryptoHasher } from "bun";

export type GenerateUserSubscriptionPaymentIDParams = {
  name: string;
  plan: plan;
};

/**
 * Generates a unique payment ID for a user's subscription.
 *
 * @param {GenerateUserSubscriptionPaymentIDParams} params - The parameters for generating the payment ID.
 * @param {string} params.name - The name of the user.
 * @param {plan} params.plan - The subscription plan of the user.
 * @returns {string} - The generated payment ID.
 * @throws {Error} - If the name or plan parameters are not provided.
 */
export default function generateUserSubscriptionPaymentID({
  name,
  plan,
}: GenerateUserSubscriptionPaymentIDParams): string {
  if (!name) throw new Error("Name params should be provided!");

  if (!plan) throw new Error("User plan params should be provided!");

  const stringToHash: string = `${name}-${plan}`;
  const hasher: CryptoHasher = newHasher("sha256");
  const hashedString: string = hasher.update(stringToHash).digest("hex");
  const paymentId: string = `pxlmpid-${hashedString}`;

  return paymentId;
}
