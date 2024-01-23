import { PaymentsHistory } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";
import AddUserPaymentHistorySchemaValidation from "../../../../validations/interfaces/types/AddUserPaymentHistorySchemaValidation";

export interface PaymentHistoryData
  extends AddUserPaymentHistorySchemaValidation {
  user_id: number;
}

type InsertUserPaymentHistoryDataParams = {
  data: PaymentHistoryData;
};

/**
 * Inserts user payment history data into the database.
 *
 * @param {InsertUserPaymentHistoryDataParams} params - The parameters for inserting user payment history data.
 * @param {PaymentHistoryData} params.data - The payment history data to be inserted.
 * @returns {Promise<PaymentsHistory>} - A promise that resolves to the inserted payment history data.
 */
export default async function insertUserPaymentHistoryData({
  data,
}: InsertUserPaymentHistoryDataParams): Promise<PaymentsHistory> {
  return await client.paymentsHistory.create({
    data,
  });
}
