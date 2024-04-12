import { UserModule } from "@/cores/user/user.module";
import providers from "../providers";
import { Test, TestingModule } from "@nestjs/testing";
import { PictureModule } from "../picture.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { PictureController } from "../picture.controller";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";

describe("Picturecontroller", () => {
  let controller: PictureController;
  let lifecycleTest: LifecycleProvider;
  let prisma: PrismaProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        UserModule,
        PictureModule,
        LibsModule,
        CommonModule,
        TestModule,
      ],
      controllers: [PictureController],
      providers,
    }).compile();

    controller = module.get<PictureController>(PictureController);
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
