import providers from "./providers";
import { Module } from "@nestjs/common";
import { PaymentHistoryController } from "./payment-history.controller";

@Module({
  controllers: [PaymentHistoryController],
  providers,
})
export class PaymentHistoryModule {}
