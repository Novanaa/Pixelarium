import { Test, TestingModule } from "@nestjs/testing";
import { ConverterProvider } from "./converter.provider";
import { ErrorProvider } from "../error/error.provider";

describe("Converter", () => {
  let converter: ConverterProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      providers: [ConverterProvider, ErrorProvider],
    }).compile();

    converter = module.get<ConverterProvider>(ConverterProvider);
  });

  describe("ConvertUSDToIDR", () => {
    it("should be return a number data type", async () => {
      expect(typeof (await converter.convertUSDToIDR(1))).toBe("number");
    });
    it("should be defined", async () => {
      expect(typeof (await converter.convertUSDToIDR(1))).toBeDefined();
    });
    it("should be not NaN", async () => {
      expect(typeof (await converter.convertUSDToIDR(1))).not.toBeNaN();
    });
  });
});
