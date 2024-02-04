import axios, { AxiosResponse } from "axios";
import exchangesRatesCurrencyApiUrl from "@/constant/readonly/exchangesRatesCurrencyApiUrl";
import CurrencyData from "@/interfaces/types/CurrencyData";

export default async function convertUSDToIDR(
  amount: number,
): Promise<CurrencyData> {
  const currencyData: Awaited<AxiosResponse> = await axios.get(
    `${exchangesRatesCurrencyApiUrl}/latest?amount=${amount}&from=USD&to=IDR`,
  );

  return currencyData.data as CurrencyData;
}
