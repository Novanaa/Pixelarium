import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";
import {
  AddUserPaymentHistoryRequestDTO,
  AddUserPaymentHistoryResponseDTO,
} from "./add-history.dto";

@Injectable()
export class AddUserPaymentHistoryProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  public async addHistory(
    name: string,
    body: AddUserPaymentHistoryRequestDTO
  ): Promise<AddUserPaymentHistoryResponseDTO> {
    console.log(body);
    console.log(name);
    return null;
  }
}
