import client from "../libs/configs/prisma";
import { Subscription } from "../../generated/client";

/**
 * Retrieves a user's subscription from the database using Prisma.
 * @param userId - The ID of the user for whom the subscription is being retrieved.
 * @returns A Promise that resolves to the user's subscription object if found, or null if no subscription is found for the given userId.
 * @throws {Error} If the userId is falsy.
 * @example
 * const subscription = await getUserSubscription(123);
 * console.log(subscription);
 * Output: { id: 1, userId: 123, ... }
 */
export default async function getUserSubscription(
  userId: number
): Promise<Subscription | null> {
  if (!userId) throw new Error("Cannot found user id");

  const userSubs: Awaited<Subscription | null> =
    await client.subscription.findUnique({
      where: { user_id: userId },
    });

  return userSubs;
}
