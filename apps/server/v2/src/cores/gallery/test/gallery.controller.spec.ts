import { Test, TestingModule } from "@nestjs/testing";
import { GalleryController } from "../gallery.controller";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { UserModule } from "@/cores/user/user.module";
import { GalleryModule } from "../gallery.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";

describe("GalleryController", () => {
  let controller: GalleryController;
  let lifecycle: LifecycleProvider;
  let prisma: PrismaProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        LibsModule,
        CommonModule,
        UserModule,
        GalleryModule,
        TestModule,
      ],
      controllers: [GalleryController],
    }).compile();

    controller = module.get<GalleryController>(GalleryController);
    lifecycle = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);

    await lifecycle.ModuleTestInit();
  });

  afterAll(async () => {
    lifecycle.cleanUpDirectory();
    await lifecycle.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
