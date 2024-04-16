import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserPaymentHistoryProvider } from "./providers";
import { RetrieveUserPaymentHistoryResponseDTO } from "./providers/retrieve-history/retrieve-history.dto";

@Controller("payment-history")
export class PaymentHistoryController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveHistoryService: RetrieveUserPaymentHistoryProvider
  ) {}

  @Get("/:name")
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  public async retrieveHistories(
    @Param("name") name: string
  ): Promise<RetrieveUserPaymentHistoryResponseDTO> {
    try {
      return await this.retrieveHistoryService.retrievePaymentsHistories(name);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
