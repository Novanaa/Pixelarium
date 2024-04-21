import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";
import { OrderStatus, PaymentsHistory } from "@prisma/client";

@Injectable()
export class PaymentHistoryRepository {
  constructor(private readonly prisma: PrismaProvider) {}

  public async findByOrderIdAndUserId(
    userId: string,
    orderId: string
  ): Promise<PaymentsHistory> {
    return await this.prisma.paymentsHistory.findUnique({
      where: { order_id: orderId, user_id: userId },
    });
  }

  public async findManyByUserId(
    userId: string
  ): Promise<Array<PaymentsHistory>> {
    return await this.prisma.paymentsHistory.findMany({
      where: { user_id: userId },
    });
  }

  public async updatePaymentHistoryStatus(
    id: string,
    status: OrderStatus
  ): Promise<PaymentsHistory> {
    return await this.prisma.paymentsHistory.update({
      where: { id },
      data: { status },
    });
  }
}
