import {
  AddUserPaymentHistoryRequestDTO,
  AddUserPaymentHistoryResponseDTO,
} from "./add-history.dto";
import { PrismaProvider } from "@/libs/providers";
import { ForbiddenException, HttpStatus, Injectable } from "@nestjs/common";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { ConverterProvider, ErrorProvider } from "@/common/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { SubscriptionConstant } from "@/constant/subscription.constant";
import { PaymentsHistory, Prisma } from "@prisma/client";
import { OrderAmount, createPaymentHistoryParam } from "./add-history";
import { UserPaymentHistory } from "@/model/app";

@Injectable()
export class AddUserPaymentHistoryProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly converterService: ConverterProvider,
    private readonly errorService: ErrorProvider
  ) {}

  public async createPaymentHistory(
    param: createPaymentHistoryParam
  ): Promise<PaymentsHistory> {
    return await this.prisma.paymentsHistory.create({
      data: {
        ...param.payload,
        user: { connect: { id: param.userId } },
        amount: param.amount as Prisma.InputJsonValue,
      },
    });
  }

  public async isHistoryAlreadyCreated(
    userId: string,
    orderId: string
  ): Promise<boolean> {
    return (
      (await this.prisma.paymentsHistory.count({
        where: { user_id: userId, order_id: orderId },
      })) > 0
    );
  }

  public async addHistory(
    name: string,
    body: AddUserPaymentHistoryRequestDTO
  ): Promise<AddUserPaymentHistoryResponseDTO> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    if (await this.isHistoryAlreadyCreated(user.id, body.order_id))
      throw new ForbiddenException(
        this.errorService.forbidden(
          "The payment history order id cannot used twice"
        )
      );

    const usd: number =
      SubscriptionConstant.PLAN_PRICES[body.plan.toLowerCase()] *
      body.interval_count;
    const convertedCurrency: Awaited<number> =
      await this.converterService.convertUSDToIDR(usd);

    const amount: OrderAmount = { IDR: convertedCurrency, USD: usd };
    const paymentHistory: Awaited<PaymentsHistory> =
      await this.createPaymentHistory({
        amount,
        payload: body,
        userId: user.id,
      });

    return {
      // @ts-expect-error interface conflicts
      history: paymentHistory as UserPaymentHistory,
      owner: user,
      code: HttpStatus.CREATED,
      status: "OK",
    };
  }
}
