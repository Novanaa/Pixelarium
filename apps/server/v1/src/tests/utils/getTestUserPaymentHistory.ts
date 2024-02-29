import { PaymentsHistory } from "../../../packages/prisma/generated/client";
import client from "../../libs/configs/prisma";

/**
 * Retrieves the payment history for a test user.
 *
 * @param userId - The ID of the user.
 * @returns A Promise that resolves to the payment history for the user, or null if no payment history is found.
 */
export default async function getTestUserPaymentHistory(
  userId: number
): Promise<PaymentsHistory | null> {
  return client.paymentsHistory.findFirst({
    where: { user_id: userId },
  }) as Promise<PaymentsHistory | null>;
}
