import { subscriptionStatus } from "../../../../packages/prisma/generated/client";

type UpdateUserPaymentHistoryRequestBodyValidationSchema = {
  status: subscriptionStatus;
};
