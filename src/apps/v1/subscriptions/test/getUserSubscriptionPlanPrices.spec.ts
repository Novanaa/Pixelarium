import { describe, expect, test } from "bun:test";
import getUserSubscriptionPlanPrices, {
  GetUserSubscriptionPlanPricesParams,
} from "../services/getUserSubscriptionPlanPrices";

describe("getUserSubscriptionPlanPrices", () => {
  // Should return the correct price for a valid plan and quantity
  test("should return the correct price for a valid plan and quantity", () => {
    const params: GetUserSubscriptionPlanPricesParams = {
      quantity: 2,
      plan: "Gold",
    };

    const totalPrice = getUserSubscriptionPlanPrices(params);

    expect(totalPrice).toBe(5.98);
  });

  // Should return null for an invalid plan
  test("should return null for an invalid plan", () => {
    const params: GetUserSubscriptionPlanPricesParams = {
      quantity: 1,
      // @ts-expect-error error
      plan: "InvalidPlan",
    };

    const totalPrice = getUserSubscriptionPlanPrices(params);

    expect(totalPrice).toBeNull();
  });

  // Should return the correct price for a quantity greater than 1
  test("should return the correct price for a quantity greater than 1", () => {
    const params: GetUserSubscriptionPlanPricesParams = {
      quantity: 3,
      plan: "Diamond",
    };

    const totalPrice = getUserSubscriptionPlanPrices(params);

    expect(totalPrice).toBe(20.97);
  });

  // Should return null for a quantity of 0
  test("should return null for a quantity of 0", () => {
    const params: GetUserSubscriptionPlanPricesParams = {
      quantity: 0,
      plan: "Gold",
    };

    const totalPrice = getUserSubscriptionPlanPrices(params);

    expect(totalPrice).toBeNull();
  });

  // Should return null for a plan that is not a string
  test("should return null for a plan that is not a string", () => {
    const params: GetUserSubscriptionPlanPricesParams = {
      quantity: 1,
      // @ts-expect-error error
      plan: 123,
    };

    const totalPrice = getUserSubscriptionPlanPrices(params);

    expect(totalPrice).toBeNull();
  });
});
