import { Test, TestingModule } from "@nestjs/testing";
import { ValidationProvider } from "./validation.provider";

describe("Validation Common Provider", () => {
  let validation: ValidationProvider;

  beforeEach(async () => {
    const app: Awaited<TestingModule> = await Test.createTestingModule({
      providers: [ValidationProvider],
    }).compile();

    validation = app.get<ValidationProvider>(ValidationProvider);
  });

  describe("Blank Payload", () => {
    it("should be return false when the sended object has a value", () => {
      expect(validation.blankPayload(new Object({ test: 1 }))).toBe(false);
    });
    it("should be return true when the sended object was empty", () => {
      expect(validation.blankPayload(new Object())).toBe(true);
    });
  });
});
