import {
  GithubAuthProvider,
  GoogleAuthProvider,
  LogoutProvider,
  TokenizerProvider,
  UserInfoProvider,
} from "../providers";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "../auth.controller";
import { LibsModule } from "@/libs/libs.module";
import { UserModule } from "@/cores/user/user.module";
import { CommonModule } from "@/common/common.module";

describe("AuthController", () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LibsModule, UserModule, CommonModule],
      controllers: [AuthController],
      providers: [
        GithubAuthProvider,
        GoogleAuthProvider,
        UserInfoProvider,
        LogoutProvider,
        TokenizerProvider,
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
