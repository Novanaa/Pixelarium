import { PaymentsHistory } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";

type GetUserPaymentHistoryByOrderIdParams = {
  orderId: string;
  userId: number;
};

/**
 * Retrieves the payment history for a specific order and user.
 *
 * @param {GetUserPaymentHistoryByOrderIdParams} params - The parameters for retrieving the payment history.
 * @param {string} params.orderId - The ID of the order.
 * @param {number} params.userId - The ID of the user.
 * @returns {Promise<PaymentsHistory | null>} - A promise that resolves to the payment history or null if not found.
 */
export default async function getUserPaymentHistoryByOrderId({
  orderId,
  userId,
}: GetUserPaymentHistoryByOrderIdParams): Promise<PaymentsHistory | null> {
  const history: Awaited<PaymentsHistory | null> =
    await client.paymentsHistory.findUnique({
      where: {
        order_id: orderId,
        user_id: userId,
      },
    });

  return history;
}
