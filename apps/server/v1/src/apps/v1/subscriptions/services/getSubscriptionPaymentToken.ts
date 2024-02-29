import base64 from "base-64";
import TokenPaymentData from "../interfaces/types/TokenPaymentData";
import {
  MIDTRANS_API_ENDPOINT,
  MIDTRANS_SECRET_KEY,
} from "../../../../const/env";
import useFetch, { UseFetchParams } from "../../../../utils/useFetch";
import TokenPaymentDataPayload from "../interfaces/types/TokenPaymentDataPayload";

/**
 * Retrieves the payment token for a subscription payment.
 *
 * @param {TokenPaymentDataPayload} body - The payload containing the transaction details, item details, and credit card data.
 * @returns {Promise<TokenPaymentData | null>} - A promise that resolves to the payment token or null if an error occurs.
 * @throws {Error} - Throws an error if unexpected errors occur during the process.
 */
export default async function getSubscriptionPaymentToken(
  body: TokenPaymentDataPayload
): Promise<TokenPaymentData | null> {
  const params: UseFetchParams = {
    method: "POST",
    url: String(MIDTRANS_API_ENDPOINT),
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Basic ${base64.encode(String(MIDTRANS_SECRET_KEY))}`,
    },
    body,
  };

  const responseData: Awaited<TokenPaymentData | null> = await useFetch(params);

  if (!responseData) throw new Error("Unexpected Errors Occurred");

  return responseData;
}
