import { Test, TestingModule } from "@nestjs/testing";
import { AuthModule } from "../auth.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "test/providers";
import { PrismaProvider } from "@/libs/providers";

describe("Auth Controller (e2e)", () => {
  let testLifecycle: LifecycleProvider;
  let prisma: PrismaProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [AuthModule, LibsModule, CommonModule, TestModule],
    }).compile();

    testLifecycle = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);

    await testLifecycle.ModuleTestInit();
    await module.init();
  });

  afterAll(async () => {
    testLifecycle.cleanUpDirectory();
    await testLifecycle.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());
});
