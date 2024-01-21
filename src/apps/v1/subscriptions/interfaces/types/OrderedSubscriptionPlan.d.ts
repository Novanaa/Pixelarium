import PremiumUserPlan from "./PremiumUserPlan";

type OrderedSubscriptionPlan = {
  name: PremiumUserPlan;
  price: number;
  currency: string;
  interval: string;
  interval_count: number;
  total_price: number;
};

export default OrderedSubscriptionPlan;
