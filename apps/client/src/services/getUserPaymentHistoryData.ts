import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import getUsername from "@/utils/getUsername";
import axios, { AxiosResponse } from "axios";
import type PaymentHistory from "@/interfaces/types/PaymentHistory";
import User from "@/interfaces/types/User";

interface PaymentHistoryResponseData {
  histories: Array<PaymentHistory>;
  owner: User;
}

export interface PaymentHistoryResponseAPI {
  data: PaymentHistoryResponseData;
  status: "OK" | "KO";
  isSuccess: boolean;
}

/**
 * Retrieves the payment history data for a user.
 *
 * @param name - The name of the user. If not provided, the function will attempt to retrieve the name from the logged-in user.
 * @returns A Promise that resolves to the payment history data for the user, or null if an error occurs.
 */
export default async function getUserPaymentHistoryData(
  name?: string,
): Promise<PaymentHistoryResponseAPI | null> {
  try {
    if (!name) {
      name = await getUsername();
    }

    const userPaymentHistory: Awaited<
      AxiosResponse<PaymentHistoryResponseAPI>
    > = await axios.get(`${apiUrlEndpoint}/v1/payment-history/${name}`);

    return userPaymentHistory.data;
  } catch (err) {
    return null;
  }
}
