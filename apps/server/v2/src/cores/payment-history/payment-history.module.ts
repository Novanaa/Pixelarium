import providers from "./providers";
import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { PaymentHistoryController } from "./payment-history.controller";

@Module({
  imports: [UserModule],
  controllers: [PaymentHistoryController],
  providers,
})
export class PaymentHistoryModule {}
