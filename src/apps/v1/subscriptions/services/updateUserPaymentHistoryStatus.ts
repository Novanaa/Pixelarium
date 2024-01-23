import {
  PaymentsHistory,
  subscriptionStatus,
} from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";

type UpdateUserPaymentHistoryStatusParams = {
  orderId: string;
  userId: number;
  status: subscriptionStatus;
};

/**
 * Updates the payment history status for a user.
 *
 * @param {UpdateUserPaymentHistoryStatusParams} params - The parameters for updating the payment history status.
 * @param {string} params.orderId - The ID of the order.
 * @param {subscriptionStatus} params.status - The new status for the payment history.
 * @returns {Promise<PaymentsHistory>} - A promise that resolves to the updated payment history.
 */
export default async function updateUserPaymentHistoryStatus({
  orderId,
  status,
  userId,
}: UpdateUserPaymentHistoryStatusParams): Promise<PaymentsHistory> {
  const updatedData: Awaited<PaymentsHistory> =
    await client.paymentsHistory.update({
      where: { order_id: orderId, user_id: userId },
      data: { status },
    });

  return updatedData;
}
