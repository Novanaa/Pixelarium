import { PaymentsHistory } from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";

/**
 * Retrieves the payment histories for a given user.
 *
 * @param user_id - The ID of the user.
 * @returns A promise that resolves to an array of payment histories.
 */
export default async function getUserPaymentsHistories(
  user_id: number
): Promise<Array<PaymentsHistory>> {
  return client.paymentsHistory.findMany({
    where: { user_id },
  }) as Promise<Array<PaymentsHistory>>;
}
