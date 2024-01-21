import { describe, expect, test } from "bun:test";
import generateUserSubscriptionPaymentID, {
  GenerateUserSubscriptionPaymentIDParams,
} from "../generateUserSubscriptionPaymentID";

describe("generateUserSubscriptionPaymentID", () => {
  // Should generate the same payment ID when given the same name and plan parameters.
  test("should generate the same payment ID when given the same name and plan parameters", () => {
    const params: GenerateUserSubscriptionPaymentIDParams = {
      name: "John Doe",
      plan: "Gold",
    };

    const paymentID1 = generateUserSubscriptionPaymentID(params);
    const paymentID2 = generateUserSubscriptionPaymentID(params);

    expect(paymentID1).toBeDefined();
    expect(paymentID2).toBeDefined();
    expect(paymentID1).toBe(paymentID2);
  });

  // Should generate different payment IDs when given different name and plan parameters.
  test("should generate different payment IDs when given different name and plan parameters", () => {
    const params1: GenerateUserSubscriptionPaymentIDParams = {
      name: "John Doe",
      plan: "none",
    };

    const params2: GenerateUserSubscriptionPaymentIDParams = {
      name: "Jane Smtesth",
      plan: "Netherite",
    };

    const paymentID1 = generateUserSubscriptionPaymentID(params1);
    const paymentID2 = generateUserSubscriptionPaymentID(params2);

    console.log(paymentID1);
    expect(paymentID1).toBeDefined();
    expect(paymentID2).toBeDefined();
    expect(paymentID1).not.toBe(paymentID2);
  });

  // Should throw an error when name parameter is not provided.
  test("should throw an error when name parameter is not provided", () => {
    // @ts-expect-error error
    const params: GenerateUserSubscriptionPaymentIDParams = {
      plan: "Gold",
    };

    expect(() => {
      generateUserSubscriptionPaymentID(params);
    }).toThrow("Name params should be provided!");
  });

  // Should throw an error when plan parameter is not provided.
  test("should throw an error when plan parameter is not provided", () => {
    // @ts-expect-error error
    const params: GenerateUserSubscriptionPaymentIDParams = {
      name: "John Doe",
    };

    expect(() => {
      generateUserSubscriptionPaymentID(params);
    }).toThrow("User plan params should be provided!");
  });

  // Should handle special characters in name parameter.
  test("should handle special characters in name parameter", () => {
    const params: GenerateUserSubscriptionPaymentIDParams = {
      name: "John Doe$",
      plan: "Diamond",
    };

    const paymentID = generateUserSubscriptionPaymentID(params);

    expect(paymentID).toBeDefined();
  });
});
