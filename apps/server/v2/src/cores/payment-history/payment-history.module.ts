import { Module } from "@nestjs/common";
import { PaymentHistoryController } from "./payment-history.controller";

@Module({
  controllers: [PaymentHistoryController],
})
export class PaymentHistoryModule {}
