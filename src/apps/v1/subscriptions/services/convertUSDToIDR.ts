import useFetch from "../../../../utils/useFetch";
import exchangeRatesCurrencyAPIHost from "../../../../const/readonly/exchangeRatesCurrencyAPIHost";
import CurrencyData from "../interfaces/types/CurrencyData";

/**
 * Converts a given amount in USD to IDR using the exchange rates from the API.
 *
 * @param amount - The amount in USD to convert to IDR.
 * @returns The converted amount in IDR.
 * @throws Error if unexpected errors occur during the conversion process.
 */
export default async function convertUSDToIDR(amount: number): Promise<number> {
  const responseData: Awaited<CurrencyData | null> = await useFetch({
    method: "GET",
    url: `${exchangeRatesCurrencyAPIHost}/latest?amount=${amount}&from=USD&to=IDR`,
  });

  if (!responseData) throw new Error("Unexpected Errors Occurred");

  return responseData.rates.IDR;
}
