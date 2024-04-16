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

describe("PaymentHistoryController", () => {
  let controller: PaymentHistoryController;
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
      controllers: [PaymentHistoryController],
      providers,
    }).compile();

    controller = module.get<PaymentHistoryController>(PaymentHistoryController);
    lifecycleTest = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);

    await lifecycleTest.ModuleTestInit();
  });

  afterEach(async () => await prisma.$disconnect());

  afterAll(async () => {
    await lifecycleTest.cleanUpDatabase();
    lifecycleTest.cleanUpDirectory();
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
