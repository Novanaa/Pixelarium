import { UserModule } from "@/cores/user/user.module";
import { Test, TestingModule } from "@nestjs/testing";
import { ClientKeysModule } from "../client-keys.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { INestApplication } from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers";

describe("ClientKeys (e2e)", () => {
  let app: INestApplication;
  let lifecycle: LifecycleProvider;
  let prisma: PrismaProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        UserModule,
        ClientKeysModule,
        LibsModule,
        CommonModule,
        TestModule,
      ],
    }).compile();

    app = module.createNestApplication();
    lifecycle = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);

    await app.init();
    await lifecycle.ModuleTestInit();
  });

  afterEach(async () => await prisma.$disconnect());

  afterAll(async () => {
    lifecycle.cleanUpDirectory();
    await lifecycle.cleanUpDatabase();
  });
});
