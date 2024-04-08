import providers from "../providers";
import { Test, TestingModule } from "@nestjs/testing";
import { FavoritePictureController } from "../favorite-picture.controller";
import { UserModule } from "@/cores/user/user.module";
import { FavoritePictureModule } from "../favorite-picture.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";

describe("FavoritePictureController", () => {
  let controller: FavoritePictureController;
  let lifecycle: LifecycleProvider;
  let prisma: PrismaProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        UserModule,
        FavoritePictureModule,
        LibsModule,
        CommonModule,
        TestModule,
      ],
      controllers: [FavoritePictureController],
      providers,
    }).compile();

    controller = module.get<FavoritePictureController>(
      FavoritePictureController
    );
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
