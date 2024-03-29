import { Test, TestingModule } from "@nestjs/testing";
import { PrettierProvider } from "./prettier.provider";
import { Logger } from "@nestjs/common";
import * as moment from "moment";
import slugify from "slugify";

describe("Prettier Provider", () => {
  let prettier: PrettierProvider;
  const logger: Logger = new Logger("PrettierUnitTest");

  beforeEach(async () => {
    const app: Awaited<TestingModule> = await Test.createTestingModule({
      providers: [PrettierProvider],
    }).compile();

    prettier = app.get<PrettierProvider>(PrettierProvider);
  });

  describe("Prettify Filename", () => {
    it("return value should be defined", () => {
      const prettifiedFilename: string = prettier.prettifyFilename("test");

      logger.log(prettifiedFilename);
      expect(prettifiedFilename).toBeDefined();
    });
    it("return value should be included original filename", () => {
      const originalFilename: string = "test";
      const prettifiedFilename: string =
        prettier.prettifyFilename(originalFilename);

      logger.log(prettifiedFilename);
      expect(prettifiedFilename.includes(originalFilename)).toBe(true);
    });
    it("return value should be a string", () => {
      const originalFilename: string = "test";
      const prettifiedFilename: string =
        prettier.prettifyFilename(originalFilename);

      logger.log(prettifiedFilename);
      expect(typeof prettifiedFilename).toBe("string");
    });
    it("return value should be included timestamps", () => {
      const now: number = new Date().getTime();
      const originalFilename: string = "test";
      const prettifiedFilename: string =
        prettier.prettifyFilename(originalFilename);
      const date: string = slugify(moment(now).format("LL"), { lower: true });

      logger.log(prettifiedFilename);
      expect(prettifiedFilename.includes(date)).toBe(true);
    });
  });
});
