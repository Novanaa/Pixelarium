/* eslint-disable indent */

import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseFilters,
} from "@nestjs/common";
import {
  AddUserPaymentHistoryProvider,
  RetrieveUserPaymentHistoryProvider,
} from "./providers";
import { PrismaProvider } from "@/libs/providers";
import { ValidationPipe } from "@/pipe/validation.pipe";
import { ApplicationExceptionFilter } from "@/filter/error.filter";
import { AddUserPaymentHistoryRequestDTO } from "./providers/add-history/add-history.dto";
import { RetrieveUserPaymentHistoryResponseDTO } from "./providers/retrieve-history/retrieve-history.dto";
import { PaymentHistoryValidation } from "./payment-history.validation";

@Controller("payment-history")
export class PaymentHistoryController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveHistoryService: RetrieveUserPaymentHistoryProvider,
    private readonly addUserPaymentHistoryService: AddUserPaymentHistoryProvider
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

  @Post("/:name")
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @UseFilters(ApplicationExceptionFilter)
  @HttpCode(HttpStatus.CREATED)
  public async addUserPaymentHistory(
    @Param("name") name: string,
    @Body(
      new ValidationPipe<AddUserPaymentHistoryRequestDTO>(
        PaymentHistoryValidation.ADD_PAYMENT_HISTORY
      )
    )
    body: AddUserPaymentHistoryRequestDTO
  ) {
    try {
      return await this.addUserPaymentHistoryService.addHistory(name, body);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
