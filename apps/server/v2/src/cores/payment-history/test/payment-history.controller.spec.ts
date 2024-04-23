import { LibsModule } from "@/libs/libs.module";
import { PaymentHistoryController } from "../payment-history.controller";
import providers from "../providers";
import { Test, TestingModule } from "@nestjs/testing";
import { TestModule } from "../../../../test/test.module";
import { CommonModule } from "@/common/common.module";
import { UserModule } from "@/cores/user/user.module";
import { PaymentHistoryModule } from "../payment-history.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpException, HttpStatus } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider, MockDataProvider } from "@/common/providers";
import { RetrieveUserPaymentHistoryResponseDTO } from "../providers/retrieve-history/retrieve-history.dto";
import { OrderStatus, PaymentsHistory, User, UserPlan } from "@prisma/client";
import { PaymentHistoryRepository } from "../payment-history.repository";
import * as falso from "@ngneat/falso";
import {
  UpdatePaymentHistoryRequestDTO,
  UpdatePaymentHistoryResponseDTO,
} from "../providers/update-history/update-history.dto";
import {
  AddUserPaymentHistoryRequestDTO,
  AddUserPaymentHistoryResponseDTO,
} from "../providers/add-history/add-history.dto";

describe("PaymentHistoryController", () => {
  let controller: PaymentHistoryController;
  let lifecycleTest: LifecycleProvider;
  let prisma: PrismaProvider;
  let errorService: ErrorProvider;
  let mockData: MockDataProvider;

  beforeEach(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        LibsModule,
        TestModule,
        CommonModule,
        UserModule,
        PaymentHistoryModule,
      ],
      controllers: [PaymentHistoryController],
      providers: [...providers, PaymentHistoryRepository],
    }).compile();

    controller = module.get<PaymentHistoryController>(PaymentHistoryController);
    lifecycleTest = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    errorService = module.get<ErrorProvider>(ErrorProvider);
    mockData = module.get<MockDataProvider>(MockDataProvider);

    await lifecycleTest.ModuleTestInit();
  });

  afterEach(async () => await prisma.$disconnect());

  afterAll(async () => {
    await lifecycleTest.cleanUpDatabase();
    lifecycleTest.cleanUpDirectory();
  });

  describe("GET /payment-history/:name", () => {
    it("should be throw not found exception if the user doesn't exist", async () => {
      try {
        await controller.retrieveHistories("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      try {
        await controller.retrieveHistories("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      try {
        await controller.retrieveHistories("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<RetrieveUserPaymentHistoryResponseDTO> =
        await controller.retrieveHistories(user.name);

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<RetrieveUserPaymentHistoryResponseDTO> =
        await controller.retrieveHistories(user.name);

      expect(response.status).toBe("OK");
    });
    it("owner response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<RetrieveUserPaymentHistoryResponseDTO> =
        await controller.retrieveHistories(user.name);

      expect(response.owner).toBeDefined();
    });
    it("user payments histories response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<RetrieveUserPaymentHistoryResponseDTO> =
        await controller.retrieveHistories(user.name);

      expect(response.histories).toBeDefined();
    });
    it("user payments histories response data should be an array", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<RetrieveUserPaymentHistoryResponseDTO> =
        await controller.retrieveHistories(user.name);

      expect(Array.isArray(response.histories)).toBe(true);
    });
    it("owner response data should be match to requested user data", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<RetrieveUserPaymentHistoryResponseDTO> =
        await controller.retrieveHistories(user.name);

      delete user.email;
      delete user.password;

      expect(JSON.stringify(response.owner)).toMatch(JSON.stringify(user));
    });
    it("owner response data should be not included email field data", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<RetrieveUserPaymentHistoryResponseDTO> =
        await controller.retrieveHistories(user.name);

      expect(response.owner.email).toBeUndefined();
    });
    it("owner response data should be not included password field data", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<RetrieveUserPaymentHistoryResponseDTO> =
        await controller.retrieveHistories(user.name);

      expect(response.owner.password).toBeUndefined();
    });
  });

  describe("POST /payment-history/:name", () => {
    it("should be throw not found exception if the user doesn't exist", async () => {
      try {
        const payload: AddUserPaymentHistoryRequestDTO = {
          status: falso.rand<OrderStatus>(["Failed", "Pending", "Success"]),
          plan: falso.rand<UserPlan>(["Diamond", "Gold", "Netherite"]),
          order_id: falso.randUuid(),
          order_date: new Date(),
          interval_count: falso.randNumber(),
          amount: {
            IDR: falso.randNumber(),
            USD: falso.randNumber(),
          },
        } satisfies AddUserPaymentHistoryRequestDTO;
        await controller.addUserPaymentHistory("0", payload);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      try {
        const payload: AddUserPaymentHistoryRequestDTO = {
          status: falso.rand<OrderStatus>(["Failed", "Pending", "Success"]),
          plan: falso.rand<UserPlan>(["Diamond", "Gold", "Netherite"]),
          order_id: falso.randUuid(),
          order_date: new Date(),
          interval_count: falso.randNumber(),
          amount: {
            IDR: falso.randNumber(),
            USD: falso.randNumber(),
          },
        } satisfies AddUserPaymentHistoryRequestDTO;
        await controller.addUserPaymentHistory("0", payload);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the payment history is already created", async () => {
      try {
        const user: Awaited<User> = await prisma.user.findFirst();
        const dummyPaymentHistory: Partial<PaymentsHistory> =
          mockData.generateRandomPaymentHistory();

        const generatedPaymentHistory: Awaited<PaymentsHistory> =
          await prisma.paymentsHistory.create({
            data: {
              ...dummyPaymentHistory,
              user_id: user.id,
            } as PaymentsHistory,
          });
        const payload: AddUserPaymentHistoryRequestDTO = {
          status: falso.rand<OrderStatus>(["Failed", "Pending", "Success"]),
          plan: falso.rand<UserPlan>(["Diamond", "Gold", "Netherite"]),
          order_id: generatedPaymentHistory.order_id,
          order_date: new Date(),
          interval_count: falso.randNumber(),
          amount: {
            IDR: falso.randNumber(),
            USD: falso.randNumber(),
          },
        } satisfies AddUserPaymentHistoryRequestDTO;

        await controller.addUserPaymentHistory(user.name, payload);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 403 status code if the payment history is already created", async () => {
      try {
        const user: Awaited<User> = await prisma.user.findFirst();
        const dummyPaymentHistory: Partial<PaymentsHistory> =
          mockData.generateRandomPaymentHistory();

        const generatedPaymentHistory: Awaited<PaymentsHistory> =
          await prisma.paymentsHistory.create({
            data: {
              ...dummyPaymentHistory,
              user_id: user.id,
            } as PaymentsHistory,
          });
        const payload: AddUserPaymentHistoryRequestDTO = {
          status: falso.rand<OrderStatus>(["Failed", "Pending", "Success"]),
          plan: falso.rand<UserPlan>(["Diamond", "Gold", "Netherite"]),
          order_id: generatedPaymentHistory.order_id,
          order_date: new Date(),
          interval_count: falso.randNumber(),
          amount: {
            IDR: falso.randNumber(),
            USD: falso.randNumber(),
          },
        } satisfies AddUserPaymentHistoryRequestDTO;

        await controller.addUserPaymentHistory(user.name, payload);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.FORBIDDEN);
        expect(err.getStatus()).toBe(HttpStatus.FORBIDDEN);
      }
    });
    it("should be throw forbidden exception if the payment history is already created", async () => {
      try {
        const user: Awaited<User> = await prisma.user.findFirst();
        const dummyPaymentHistory: Partial<PaymentsHistory> =
          mockData.generateRandomPaymentHistory();

        const generatedPaymentHistory: Awaited<PaymentsHistory> =
          await prisma.paymentsHistory.create({
            data: {
              ...dummyPaymentHistory,
              user_id: user.id,
            } as PaymentsHistory,
          });
        const payload: AddUserPaymentHistoryRequestDTO = {
          status: falso.rand<OrderStatus>(["Failed", "Pending", "Success"]),
          plan: falso.rand<UserPlan>(["Diamond", "Gold", "Netherite"]),
          order_id: generatedPaymentHistory.order_id,
          order_date: new Date(),
          interval_count: falso.randNumber(),
          amount: {
            IDR: falso.randNumber(),
            USD: falso.randNumber(),
          },
        } satisfies AddUserPaymentHistoryRequestDTO;

        await controller.addUserPaymentHistory(user.name, payload);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(
          errorService.forbidden(
            "The payment history order id cannot used twice"
          )
        );
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const payload: AddUserPaymentHistoryRequestDTO = {
        status: falso.rand<OrderStatus>(["Failed", "Pending", "Success"]),
        plan: falso.rand<UserPlan>(["Diamond", "Gold", "Netherite"]),
        order_id: falso.randUuid(),
        order_date: new Date(),
        interval_count: falso.randNumber(),
        amount: {
          IDR: falso.randNumber(),
          USD: falso.randNumber(),
        },
      } satisfies AddUserPaymentHistoryRequestDTO;

      const response: Awaited<AddUserPaymentHistoryResponseDTO> =
        await controller.addUserPaymentHistory(user.name, payload);

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const payload: AddUserPaymentHistoryRequestDTO = {
        status: falso.rand<OrderStatus>(["Failed", "Pending", "Success"]),
        plan: falso.rand<UserPlan>(["Diamond", "Gold", "Netherite"]),
        order_id: falso.randUuid(),
        order_date: new Date(),
        interval_count: falso.randNumber(),
        amount: {
          IDR: falso.randNumber(),
          USD: falso.randNumber(),
        },
      } satisfies AddUserPaymentHistoryRequestDTO;

      const response: Awaited<AddUserPaymentHistoryResponseDTO> =
        await controller.addUserPaymentHistory(user.name, payload);

      expect(response.status).toBe("OK");
    });
  });

  describe("PATCH /payment-history/:name/:orderId", () => {
    it("should be throw not found exception response error if the user doesn't exist", async () => {
      try {
        await controller.updatePaymentHistory("0", falso.randUuid(), {
          order_status: "Failed",
        });
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      try {
        await controller.updatePaymentHistory("0", falso.randUuid(), {
          order_status: "Failed",
        });
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      try {
        await controller.updatePaymentHistory("0", falso.randUuid(), {
          order_status: "Failed",
        });
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("status response should be 'KO' if the payment history doesn't exist", async () => {
      try {
        const user: Awaited<User> = await prisma.user.findFirst();
        await controller.updatePaymentHistory(user.name, falso.randUuid(), {
          order_status: "Failed",
        });
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 404 status code if the payment history doesn't exist", async () => {
      try {
        const user: Awaited<User> = await prisma.user.findFirst();
        await controller.updatePaymentHistory(user.name, falso.randUuid(), {
          order_status: "Failed",
        });
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("should be throw not found exception if the payment history doesn't exist", async () => {
      try {
        const user: Awaited<User> = await prisma.user.findFirst();
        await controller.updatePaymentHistory(user.name, falso.randUuid(), {
          order_status: "Failed",
        });
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(
          errorService.notFound(
            "Sorry, the requested payment history could not be found."
          )
        );
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({
          where: { user_id: user.id },
        });
      const response: Awaited<UpdatePaymentHistoryResponseDTO> =
        await controller.updatePaymentHistory(
          user.name,
          paymentHistory.order_id,
          {
            order_status: "Failed",
          }
        );

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({
          where: { user_id: user.id },
        });
      const response: Awaited<UpdatePaymentHistoryResponseDTO> =
        await controller.updatePaymentHistory(
          user.name,
          paymentHistory.order_id,
          {
            order_status: "Failed",
          }
        );

      expect(response.status).toBe("OK");
    });
    it("owner response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({
          where: { user_id: user.id },
        });
      const response: Awaited<UpdatePaymentHistoryResponseDTO> =
        await controller.updatePaymentHistory(
          user.name,
          paymentHistory.order_id,
          {
            order_status: "Failed",
          }
        );

      expect(response.owner).toBeDefined();
    });
    it("updated field response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({
          where: { user_id: user.id },
        });
      const response: Awaited<UpdatePaymentHistoryResponseDTO> =
        await controller.updatePaymentHistory(
          user.name,
          paymentHistory.order_id,
          {
            order_status: "Failed",
          }
        );

      expect(response.updated_field).toBeDefined();
    });
    it("updated history response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({
          where: { user_id: user.id },
        });
      const response: Awaited<UpdatePaymentHistoryResponseDTO> =
        await controller.updatePaymentHistory(
          user.name,
          paymentHistory.order_id,
          {
            order_status: "Failed",
          }
        );

      expect(response.updated_history).toBeDefined();
    });
    it("updated history status response data should be 'Failed'", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({
          where: { user_id: user.id },
        });
      const response: Awaited<UpdatePaymentHistoryResponseDTO> =
        await controller.updatePaymentHistory(
          user.name,
          paymentHistory.order_id,
          {
            order_status: "Failed",
          }
        );

      expect(response.updated_history.status).toBe("Failed");
    });
    it("updated field response data should be equal to request payload", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({
          where: { user_id: user.id },
        });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<UpdatePaymentHistoryResponseDTO> =
        await controller.updatePaymentHistory(
          user.name,
          paymentHistory.order_id,
          payload
        );

      expect(response.updated_field).toEqual({ status: payload.order_status });
    });
    it("owner response data should be match to requested user", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({
          where: { user_id: user.id },
        });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<UpdatePaymentHistoryResponseDTO> =
        await controller.updatePaymentHistory(
          user.name,
          paymentHistory.order_id,
          payload
        );

      delete user.email;
      delete user.password;

      expect(JSON.stringify(response.owner)).toMatch(JSON.stringify(user));
    });
  });
});
