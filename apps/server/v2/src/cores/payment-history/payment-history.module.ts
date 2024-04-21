import providers from "./providers";
import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { PaymentHistoryController } from "./payment-history.controller";
import { PaymentHistoryRepository } from "./payment-history.repository";

@Module({
  imports: [UserModule],
  controllers: [PaymentHistoryController],
  providers: [...providers, PaymentHistoryRepository],
})
export class PaymentHistoryModule {}
