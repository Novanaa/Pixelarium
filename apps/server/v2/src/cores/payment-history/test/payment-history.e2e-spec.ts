import { LibsModule } from "@/libs/libs.module";
import { Test, TestingModule } from "@nestjs/testing";
import { TestModule } from "../../../../test/test.module";
import { CommonModule } from "@/common/common.module";
import { UserModule } from "@/cores/user/user.module";
import { PaymentHistoryModule } from "../payment-history.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { INestApplication } from "@nestjs/common";

describe("PaymentHistoryController (e2e)", () => {
  let app: INestApplication;
  let lifecycleTest: LifecycleProvider;
  let prisma: PrismaProvider;

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

    await app.init();
    await lifecycleTest.ModuleTestInit();
  });

  afterEach(async () => await prisma.$disconnect());

  afterAll(async () => {
    await lifecycleTest.cleanUpDatabase();
    lifecycleTest.cleanUpDirectory();
  });

  it("should be defined", () => {
    expect(app).toBeDefined();
  });
});
