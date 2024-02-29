import client from "../../../../libs/configs/prisma";

/**
 * Deactivates the subscriptions for a user.
 *
 * @param userId - The ID of the user whose subscriptions need to be deactivated.
 * @returns A Promise that resolves to void.
 */
export default async function deactivateUserSubs(
  userId: number
): Promise<void> {
  await client.user.update({
    where: { id: userId },
    data: {
      is_member: false,
      subscription: {
        update: {
          end_date: null,
          start_date: null,
          next_payments_date: null,
          payment_id: null,
          plan: "none",
          status: "deactive",
          interval_count: 0,
        },
      },
    },
  });
}
