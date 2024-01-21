import pricesList from "../../../../../resources/prices-list.json";

export type Plan = "Gold" | "Diamond" | "Netherite";

export type GetUserSubscriptionPlanPricesParams = {
  quantity: number;
  plan: Plan;
};

/**
 * Calculates the total price for a user's subscription plan based on the plan and quantity.
 *
 * @param {GetUserSubscriptionPlanPricesParams} params - The parameters for calculating the price.
 * @param {number} params.quantity - The quantity of the subscription plan.
 * @param {Plan} params.plan - The subscription plan.
 * @returns {number | null} - The total price for the user's subscription plan, or null if the plan is not found.
 */
export default function getUserSubscriptionPlanPrices({
  plan,
  quantity = 1,
}: GetUserSubscriptionPlanPricesParams): number | null {
  const userSubscriptionPlanPrices = {
    Gold: pricesList[1].price * quantity,
    Diamond: pricesList[2].price * quantity,
    Netherite: pricesList[3].price * quantity,
  };

  const userSubscriptionPlanPricesMapping: number | null =
    userSubscriptionPlanPrices[plan] || null;

  return userSubscriptionPlanPricesMapping;
}
