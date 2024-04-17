import * as axios from "axios";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { CurrencyExchange } from "./converter";
import { ErrorProvider } from "../error/error.provider";

@Injectable()
export class ConverterProvider {
  constructor(private readonly errorService: ErrorProvider) {}

  public async convertUSDToIDR(amount: number): Promise<number> {
    try {
      const endpoint: string =
        "https://api.frankfurter.app/latest?from=USD&to=IDR&amount=" + amount;
      const currency: Awaited<axios.AxiosResponse<CurrencyExchange>> =
        await axios.default.get(endpoint);

      return currency.data.rates.IDR;
    } catch (err) {
      throw new InternalServerErrorException(
        this.errorService.internalServerError()
      );
    }
  }
}
