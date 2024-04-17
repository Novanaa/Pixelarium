export interface CurrencyExchange {
  amount: number;
  base: string;
  date: string;
  rates: ExchangeRates;
}

export interface ExchangeRates {
  IDR: number;
}
