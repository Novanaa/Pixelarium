import pricesList from "../../../../../resources/prices-list.json";
import PremiumUserPlan from "../interfaces/types/PremiumUserPlan";

/**
 * Retrieves the price of a user's subscription plan.
 *
 * @param {PremiumUserPlan} plan - The user's subscription plan (Gold, Diamond, or Netherite).
 * @returns {number } - The price of the user's subscription plan, or null if the plan is not found.
 */
export default function getUserSubscriptionPrice(
  plan: PremiumUserPlan
): number {
  const userSubscriptionPlanPrices = {
    Gold: pricesList[1].price,
    Diamond: pricesList[2].price,
    Netherite: pricesList[3].price,
  };

  const userSubscriptionPlanPricesMapping: number =
    userSubscriptionPlanPrices[plan];

  return userSubscriptionPlanPricesMapping;
}
