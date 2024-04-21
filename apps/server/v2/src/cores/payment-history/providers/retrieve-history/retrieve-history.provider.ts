import { HttpStatus, Injectable } from "@nestjs/common";
import { RetrieveUserPaymentHistoryResponseDTO } from "./retrieve-history.dto";
import { PaymentsHistory } from "@prisma/client";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { PaymentHistoryRepository } from "../../payment-history.repository";

@Injectable()
export class RetrieveUserPaymentHistoryProvider {
  constructor(
    private readonly paymentHistoryRepo: PaymentHistoryRepository,
    private readonly retrieveUserService: RetrieveUserProvider
  ) {}

  public async retrievePaymentsHistories(
    name: string
  ): Promise<RetrieveUserPaymentHistoryResponseDTO> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);
    const paymentsHistories: Awaited<Array<PaymentsHistory>> =
      await this.paymentHistoryRepo.findManyByUserId(user.id);

    return {
      owner: user,
      histories: paymentsHistories,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
