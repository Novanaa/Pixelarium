import { Test, TestingModule } from "@nestjs/testing";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { PictureModule } from "@/cores/picture/picture.module";
import { EmbedLinkModule } from "../embed-link.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { INestApplication } from "@nestjs/common";

describe("EmbedLinkController", () => {
  let app: INestApplication;
  let lifecycleTest: LifecycleProvider;
  let prisma: PrismaProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        LibsModule,
        CommonModule,
        PictureModule,
        EmbedLinkModule,
        TestModule,
      ],
    }).compile();

    app = module.createNestApplication();
    lifecycleTest = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);

    await app.init();
    await lifecycleTest.ModuleTestInit();
  });

  afterAll(async () => {
    lifecycleTest.cleanUpDirectory();
    await lifecycleTest.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  it("should be defined", () => {
    expect(app).toBeDefined();
  });
});
