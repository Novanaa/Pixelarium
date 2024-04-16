import { HttpStatus, Injectable } from "@nestjs/common";
import { RetrieveUserPaymentHistoryResponseDTO } from "./retrieve-history.dto";
import { PaymentsHistory } from "@prisma/client";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";

@Injectable()
export class RetrieveUserPaymentHistoryProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserService: RetrieveUserProvider
  ) {}

  public async retrieveUserPaymentsHistoriesByUserId(
    userId: string
  ): Promise<Array<PaymentsHistory>> {
    return await this.prisma.paymentsHistory.findMany({
      where: { user_id: userId },
    });
  }

  public async retrievePaymentsHistories(
    name: string
  ): Promise<RetrieveUserPaymentHistoryResponseDTO> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);
    const paymentsHistories: Awaited<Array<PaymentsHistory>> =
      await this.retrieveUserPaymentsHistoriesByUserId(user.id);

    return {
      owner: user,
      histories: paymentsHistories,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
