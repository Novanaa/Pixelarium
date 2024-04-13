import providers from "../providers";
import { Test, TestingModule } from "@nestjs/testing";
import { EmbedLinkController } from "../embed-link.controller";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { PictureModule } from "@/cores/picture/picture.module";
import { EmbedLinkModule } from "../embed-link.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";

describe("EmbedLinkController", () => {
  let controller: EmbedLinkController;
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
      controllers: [EmbedLinkController],
      providers,
    }).compile();

    controller = module.get<EmbedLinkController>(EmbedLinkController);
    lifecycleTest = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);

    await lifecycleTest.ModuleTestInit();
  });

  afterAll(async () => {
    lifecycleTest.cleanUpDirectory();
    await lifecycleTest.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
