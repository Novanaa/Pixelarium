import { Test, TestingModule } from "@nestjs/testing";
import { ClientKeysController } from "../client-keys.controller";
import { LibsModule } from "@/libs/libs.module";
import { TestModule } from "../../../../test/test.module";
import { CommonModule } from "@/common/common.module";
import { UserModule } from "@/cores/user/user.module";
import { ClientKeysModule } from "../client-keys.module";
import {
  CredentialsProvider,
  RetrieveUserClientCredentialsKeysProvider,
} from "../providers";
import { PrismaProvider } from "@/libs/providers";
import { LifecycleProvider } from "../../../../test/providers";

describe("ClientKeysController", () => {
  let prisma: PrismaProvider;
  let lifecycle: LifecycleProvider;
  let controller: ClientKeysController;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        LibsModule,
        TestModule,
        CommonModule,
        UserModule,
        ClientKeysModule,
      ],
      controllers: [ClientKeysController],
      providers: [
        CredentialsProvider,
        RetrieveUserClientCredentialsKeysProvider,
      ],
    }).compile();

    controller = module.get<ClientKeysController>(ClientKeysController);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    lifecycle = module.get<LifecycleProvider>(LifecycleProvider);

    await lifecycle.ModuleTestInit();
  });

  afterEach(async () => await prisma.$disconnect());

  afterAll(async () => {
    lifecycle.cleanUpDirectory();
    await lifecycle.cleanUpDatabase();
  });
});
