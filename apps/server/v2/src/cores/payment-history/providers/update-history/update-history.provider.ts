import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { UpdatePaymentHistoryResponseDTO } from "./update-history.dto";
import { UpdatePaymentHistoryParam } from "./update-history";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { PaymentHistoryRepository } from "../../payment-history.repository";
import { PaymentsHistory } from "@prisma/client";
import { ErrorProvider } from "@/common/providers";

@Injectable()
export class UpdatePaymentHistoryProvider {
  constructor(
    private readonly errorService: ErrorProvider,
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly paymentHistoryRepo: PaymentHistoryRepository
  ) {}

  public async updatePaymentHistory(
    param: UpdatePaymentHistoryParam
  ): Promise<UpdatePaymentHistoryResponseDTO> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(param.name);

    const history: Awaited<PaymentsHistory> =
      await this.paymentHistoryRepo.findByOrderIdAndUserId(
        user.id,
        param.orderId
      );

    if (!history)
      throw new NotFoundException(
        this.errorService.notFound(
          "Sorry, the requested payment history could not be found."
        )
      );

    const updatedHistory: Awaited<PaymentsHistory> =
      await this.paymentHistoryRepo.updatePaymentHistoryStatus(
        history.id,
        param.body.order_status
      );

    return {
      updated_history: updatedHistory,
      updated_field: {
        status: param.body.order_status,
      },
      owner: user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
