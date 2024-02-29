import { plan } from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";

type UpgradeUserSubscriptionPlanParams = {
  userId: number;
  plan: plan;
  startDate: Date;
  endDate: Date;
  intervalCount: number;
  nextPaymentDate: Date;
  paymentId: string;
};

/**
 * Upgrades the subscription plan for a user.
 *
 * @param {UpgradeUserSubscriptionPlanParams} params - The parameters for upgrading the user's subscription plan.
 * @param {number} params.userId - The ID of the user.
 * @param {plan} params.plan - The new subscription plan.
 * @param {Date} params.startDate - The start date of the new subscription plan.
 * @param {Date} params.endDate - The end date of the new subscription plan.
 * @param {number} params.intervalCount - The interval count of the new subscription plan.
 * @param {Date} params.nextPaymentDate - The next payment date of the new subscription plan.
 * @param {string} params.paymentId - The payment ID of the new subscription plan.
 * @returns {Promise<void>} - A promise that resolves when the subscription plan is upgraded.
 */
export default async function upgradeUserSubscriptionPlan({
  plan,
  userId,
  endDate,
  intervalCount,
  nextPaymentDate,
  paymentId,
  startDate,
}: UpgradeUserSubscriptionPlanParams): Promise<void> {
  await client.subscription.update({
    where: { user_id: userId },
    data: {
      plan,
      end_date: endDate,
      interval_count: intervalCount,
      next_payments_date: nextPaymentDate,
      payment_id: paymentId,
      start_date: startDate,
      status: "active",
    },
  });
}
