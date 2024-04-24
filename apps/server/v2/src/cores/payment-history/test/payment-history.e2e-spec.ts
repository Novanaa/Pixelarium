import { LibsModule } from "@/libs/libs.module";
import { Test, TestingModule } from "@nestjs/testing";
import { TestModule } from "../../../../test/test.module";
import { CommonModule } from "@/common/common.module";
import { UserModule } from "@/cores/user/user.module";
import { PaymentHistoryModule } from "../payment-history.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpStatus, INestApplication } from "@nestjs/common";
import * as supertest from "supertest";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider } from "@/common/providers";
import { PaymentsHistory, User, UserPlan } from "@prisma/client";
import { RetrieveUserPaymentHistoryResponseDTO } from "../providers/retrieve-history/retrieve-history.dto";
import {
  UpdatePaymentHistoryRequestDTO,
  UpdatePaymentHistoryResponseDTO,
} from "../providers/update-history/update-history.dto";
import * as falso from "@ngneat/falso";
import { AddUserPaymentHistoryResponseDTO } from "../providers/add-history/add-history.dto";
import { SubscriptionConstant } from "@/constant/subscription.constant";

describe("PaymentHistoryController (e2e)", () => {
  let app: INestApplication;
  let lifecycleTest: LifecycleProvider;
  let prisma: PrismaProvider;
  let error: ErrorProvider;

  beforeEach(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        LibsModule,
        TestModule,
        CommonModule,
        UserModule,
        PaymentHistoryModule,
      ],
    }).compile();

    app = module.createNestApplication();
    lifecycleTest = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    error = module.get<ErrorProvider>(ErrorProvider);

    await app.init();
    await lifecycleTest.ModuleTestInit();
  });

  afterEach(async () => await prisma.$disconnect());

  afterAll(async () => {
    await lifecycleTest.cleanUpDatabase();
    lifecycleTest.cleanUpDirectory();
  });

  describe("GET /payment-history/:name", () => {
    it("should be throw not found exception if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      ).get("/payment-history/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.notFound());
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      ).get("/payment-history/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      ).get("/payment-history/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      ).get("/payment-history/" + user.name);
      const body: RetrieveUserPaymentHistoryResponseDTO =
        response.body as RetrieveUserPaymentHistoryResponseDTO;

      expect(body.code).toBe(HttpStatus.OK);
    });
    it("make sure it can accept application/json", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      )
        .get("/payment-history/" + user.name)
        .set("Content-Type", "application/json");
      const body: RetrieveUserPaymentHistoryResponseDTO =
        response.body as RetrieveUserPaymentHistoryResponseDTO;

      expect(body.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      )
        .get("/payment-history/" + user.name)
        .set("Content-Type", "application/json");
      const body: RetrieveUserPaymentHistoryResponseDTO =
        response.body as RetrieveUserPaymentHistoryResponseDTO;

      expect(body.status).toBe("OK");
    });
    it("owner response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      )
        .get("/payment-history/" + user.name)
        .set("Content-Type", "application/json");
      const body: RetrieveUserPaymentHistoryResponseDTO =
        response.body as RetrieveUserPaymentHistoryResponseDTO;

      expect(body.owner).toBeDefined();
    });
    it("user payment history response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      )
        .get("/payment-history/" + user.name)
        .set("Content-Type", "application/json");
      const body: RetrieveUserPaymentHistoryResponseDTO =
        response.body as RetrieveUserPaymentHistoryResponseDTO;

      expect(body.histories).toBeDefined();
    });
    it("user payment history response data should be an array", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      )
        .get("/payment-history/" + user.name)
        .set("Content-Type", "application/json");
      const body: RetrieveUserPaymentHistoryResponseDTO =
        response.body as RetrieveUserPaymentHistoryResponseDTO;

      expect(Array.isArray(body.histories)).toBe(true);
    });
    it("owner response data should be match to requested user data", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      )
        .get("/payment-history/" + user.name)
        .set("Content-Type", "application/json");
      const body: RetrieveUserPaymentHistoryResponseDTO =
        response.body as RetrieveUserPaymentHistoryResponseDTO;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.owner)).toMatch(JSON.stringify(user));
    });
    it("owner response data should be not included email field data", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      )
        .get("/payment-history/" + user.name)
        .set("Content-Type", "application/json");
      const body: RetrieveUserPaymentHistoryResponseDTO =
        response.body as RetrieveUserPaymentHistoryResponseDTO;

      expect(body.owner.email).toBeUndefined();
    });
    it("owner response data should be not included password field data", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Response | Request> = await supertest(
        app.getHttpServer()
      )
        .get("/payment-history/" + user.name)
        .set("Content-Type", "application/json");
      const body: RetrieveUserPaymentHistoryResponseDTO =
        response.body as RetrieveUserPaymentHistoryResponseDTO;

      expect(body.owner.password).toBeUndefined();
    });
  });

  describe("POST /payment-history/:name", () => {
    it("should be throw bad request exception if the request payload is empty", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest(
          "The request you made is missing the required request body. Please provide the necessary data in the request body to proceed."
        )
      );
    });
    it("should be return 400 status code if the request payload is empty", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the request payload is empty", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw bad request exception if the request payload is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.badRequest("test is not allowed"));
    });
    it("should be return 400 status code if the request payload is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the request payload is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("should be return 400 status code if the request payload user plan is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "none",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the request payload user plan is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "none",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw bad request exception if the request payload user plan is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "none",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest("plan must be one of [Diamond, Gold, Netherite]")
      );
    });
    it("should be return 400 status code if the request payload user plan is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "none",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the request payload user plan is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "none",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("status response should be 'KO' if the request payload user plan is invalid data type", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: 1,
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 400 status code if the request payload user plan is invalid data type", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: 1,
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("should be throw bad request exception if the request payload user plan is invalid data type", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: 1,
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest("plan must be one of [Diamond, Gold, Netherite]")
      );
    });
    it("should be throw bad request exception if the request payload order id is invalid data type", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0").send({
          plan: "Gold",
          order_date: new Date(),
          order_id: 1,
          test: "test",
        });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.badRequest("order_id must be a string"));
    });
    it("should be return 400 status code if the request payload order id is invalid data type", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0").send({
          plan: "Gold",
          order_date: new Date(),
          order_id: 1,
          test: "test",
        });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the request payload order id is invalid data type", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0").send({
          plan: "Gold",
          order_date: new Date(),
          order_id: 1,
          test: "test",
        });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("should be throw bad request exception if the request payload order id is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0").send({
          plan: "Gold",
          order_date: new Date(),
          order_id: "test",
        });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest(
          "order_id with value test fails to match the required pattern: /plxmoid-[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/"
        )
      );
    });
    it("should be return 400 status code if the request payload order id is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0").send({
          plan: "Gold",
          order_date: new Date(),
          order_id: "test",
        });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the request payload order id is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0").send({
          plan: "Gold",
          order_date: new Date(),
          order_id: "test",
        });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("status response should be 'KO' if the request payload order date is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0").send({
          plan: "Gold",
          order_date: "test",
          order_id: "test",
        });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 400 status code if the request payload order date is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0").send({
          plan: "Gold",
          order_date: "test",
          order_id: "test",
        });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("should be throw bad request exception if the request payload order date is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).post("/payment-history/0").send({
          plan: "Gold",
          order_date: "test",
          order_id: "test",
        });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.badRequest("order_date must be a valid date"));
    });
    it("should be throw not found exception if the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.notFound());
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/0")
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("status response should be 'KO' if the payment history is created twice", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: paymentHistory.order_id,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 403 status code if the payment history is created twice", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: paymentHistory.order_id,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.FORBIDDEN);
      expect(response.status).toBe(HttpStatus.FORBIDDEN);
    });
    it("should be throw forbidden exception if the payment history is created twice", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: paymentHistory.order_id,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.forbidden("The payment history order id cannot used twice")
      );
    });
    it("should be return 201 status code", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          });
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      expect(body.code).toBe(HttpStatus.CREATED);
      expect(response.status).toBe(HttpStatus.CREATED);
    });
    it("make sure it can accept application/json", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          })
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      expect(body.code).toBe(HttpStatus.CREATED);
      expect(response.status).toBe(HttpStatus.CREATED);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          })
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      expect(body.status).toBe("OK");
    });
    it("owner response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          })
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      expect(body.owner).toBeDefined();
    });
    it("owner response data should be match to requested user", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          })
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.owner)).toMatch(JSON.stringify(user));
    });
    it("history response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          })
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      expect(body.history).toBeDefined();
    });
    it("history.amount response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          })
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      expect(body.history.amount).toBeDefined();
    });
    it("history.amount.USD response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          })
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      expect(body.history.amount.USD).toBeDefined();
    });
    it("history.amount.IDR response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan: "Gold",
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
          })
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      expect(body.history.amount.IDR).toBeDefined();
    });
    it("history.amount.USD response data should be correctly calculated", async () => {
      const plan: UserPlan = "Gold";
      const interval: number = 3;
      const user: Awaited<User> = await prisma.user.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .post("/payment-history/" + user.name)
          .send({
            plan,
            order_date: new Date(),
            order_id: "plxmoid-" + falso.randUuid(),
            interval_count: interval,
          })
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
      const body: AddUserPaymentHistoryResponseDTO =
        response.body as AddUserPaymentHistoryResponseDTO;

      expect(body.history.amount.USD).toEqual(
        SubscriptionConstant.PLAN_PRICES[plan.toLowerCase()] * interval
      );
    });
  });

  describe("PATCH /payment-history/:name/:orderId", () => {
    it("should be throw bad request exception if the payload is empty", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).patch("/payment-history/0/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest(
          "The request you made is missing the required request body. Please provide the necessary data in the request body to proceed."
        )
      );
    });
    it("should be return 400 status code if the payload is empty", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).patch("/payment-history/0/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the payload is empty", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).patch("/payment-history/0/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("status response should be 'KO' if the payload is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            test: "test",
            order_status: "Failed",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 400 status code if the payload is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            test: "test",
            order_status: "Failed",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("should be throw bad request exception if the payload is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            test: "test",
            order_status: "Failed",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.badRequest("test is not allowed"));
    });
    it("should be throw bad request exception if the payload is not included order_status", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.badRequest("order_status is required"));
    });
    it("should be return 400 status code if the payload is not included order_status", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the payload is not included order_status", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            test: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw bad request exception if the order_status had an invalid data type", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            order_status: 0,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest(
          "order_status must be one of [Failed, Pending, Success]"
        )
      );
    });
    it("should be return 400 status code if the order_status had an invalid data type", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            order_status: 0,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status resonse should be 'KO' if the order_status had an invalid data type", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            order_status: 0,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("status resonse should be 'KO' if the order_status had an invalid status", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            order_status: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 400 status code if the order_status had an invalid status", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            order_status: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("should be throw bad request exception if the order_status had an invalid status", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send({
            order_status: "test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest(
          "order_status must be one of [Failed, Pending, Success]"
        )
      );
    });
    it("should be throw not found exception if the user doesn't exist", async () => {
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send(payload);
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.notFound());
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send(payload);
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch("/payment-history/0/0")
          .send(payload);
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw not found exception if the payment history doesn't exist", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/0`)
          .send(payload);
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.notFound(
          "Sorry, the requested payment history could not be found."
        )
      );
    });
    it("should be return 404 status code if the payment history doesn't exist", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/0`)
          .send(payload);
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' if the payment history doesn't exist", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/0`)
          .send(payload);
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({ where: { user_id: user.id } });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/` + paymentHistory.order_id)
          .send(payload);
      const body: UpdatePaymentHistoryResponseDTO =
        response.body as UpdatePaymentHistoryResponseDTO;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("make sure it can accept application/json", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({ where: { user_id: user.id } });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/` + paymentHistory.order_id)
          .send(payload)
          .set("Content-Type", "application/json");
      const body: UpdatePaymentHistoryResponseDTO =
        response.body as UpdatePaymentHistoryResponseDTO;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({ where: { user_id: user.id } });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/` + paymentHistory.order_id)
          .send(payload)
          .set("Content-Type", "application/json");
      const body: UpdatePaymentHistoryResponseDTO =
        response.body as UpdatePaymentHistoryResponseDTO;

      expect(body.status).toBe("OK");
    });
    it("owner response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({ where: { user_id: user.id } });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/` + paymentHistory.order_id)
          .send(payload)
          .set("Content-Type", "application/json");
      const body: UpdatePaymentHistoryResponseDTO =
        response.body as UpdatePaymentHistoryResponseDTO;

      expect(body.owner).toBeDefined();
    });
    it("updated field response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({ where: { user_id: user.id } });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/` + paymentHistory.order_id)
          .send(payload)
          .set("Content-Type", "application/json");
      const body: UpdatePaymentHistoryResponseDTO =
        response.body as UpdatePaymentHistoryResponseDTO;

      expect(body.updated_field).toBeDefined();
    });
    it("updated history response data should be defined", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({ where: { user_id: user.id } });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/` + paymentHistory.order_id)
          .send(payload)
          .set("Content-Type", "application/json");
      const body: UpdatePaymentHistoryResponseDTO =
        response.body as UpdatePaymentHistoryResponseDTO;

      expect(body.updated_history).toBeDefined();
    });
    it("updated history status response data should be updated", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({ where: { user_id: user.id } });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/` + paymentHistory.order_id)
          .send(payload)
          .set("Content-Type", "application/json");
      const body: UpdatePaymentHistoryResponseDTO =
        response.body as UpdatePaymentHistoryResponseDTO;

      expect(body.updated_history.status).toBe(payload.order_status);
    });
    it("updated field response data should be contains updated history field", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({ where: { user_id: user.id } });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/` + paymentHistory.order_id)
          .send(payload)
          .set("Content-Type", "application/json");
      const body: UpdatePaymentHistoryResponseDTO =
        response.body as UpdatePaymentHistoryResponseDTO;

      expect(body.updated_field).toEqual({ status: payload.order_status });
    });
    it("owner response data should be match to requested user data", async () => {
      const user: Awaited<User> = await prisma.user.findFirst();
      const paymentHistory: Awaited<PaymentsHistory> =
        await prisma.paymentsHistory.findFirst({ where: { user_id: user.id } });
      const payload: UpdatePaymentHistoryRequestDTO = {
        order_status: "Failed",
      };
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(`/payment-history/${user.name}/` + paymentHistory.order_id)
          .send(payload)
          .set("Content-Type", "application/json");
      const body: UpdatePaymentHistoryResponseDTO =
        response.body as UpdatePaymentHistoryResponseDTO;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.owner)).toMatch(JSON.stringify(user));
    });
  });
});
