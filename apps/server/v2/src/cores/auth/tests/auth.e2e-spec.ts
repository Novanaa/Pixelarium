import { Test, TestingModule } from "@nestjs/testing";
import { AuthModule } from "../auth.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import * as supertest from "supertest";
import { HttpStatus, INestApplication } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider } from "@/common/providers";
import * as cookieParser from "cookie-parser";

describe("Auth Controller (e2e)", () => {
  let app: INestApplication;
  let testLifecycle: LifecycleProvider;
  let prisma: PrismaProvider;
  let errorService: ErrorProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [AuthModule, LibsModule, CommonModule, TestModule],
    }).compile();

    app = module.createNestApplication();
    testLifecycle = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    errorService = module.get<ErrorProvider>(ErrorProvider);

    app.use(cookieParser());

    await app.init();
    await testLifecycle.ModuleTestInit();
  });

  afterAll(async () => {
    testLifecycle.cleanUpDirectory();
    await testLifecycle.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  describe("GET /auth/tokenizer", () => {
    it("should be throw unauthorized exception error response", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/auth/tokenizer");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(errorService.unauthorized());
    });
    it("should be return 401 status code if the session cookies is not setted", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/auth/tokenizer");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toEqual(HttpStatus.UNAUTHORIZED);
      expect(response.status).toEqual(HttpStatus.UNAUTHORIZED);
    });
    it("status response should be 'KO' if the session cookies is not setted", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/auth/tokenizer");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw forbidden exception error response if the session cookies is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=test");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(errorService.forbidden());
    });
  });
});
