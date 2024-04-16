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
import { User } from "@prisma/client";
import { RetrieveUserPaymentHistoryResponseDTO } from "../providers/retrieve-history/retrieve-history.dto";

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
});
