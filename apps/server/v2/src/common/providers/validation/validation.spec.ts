import { Test, TestingModule } from "@nestjs/testing";
import { ValidationProvider } from "./validation.provider";
import { MockDataProvider } from "../mock-data/mock.provider";
import { PrismaProvider } from "@/libs/providers";

describe("Validation Common Provider", () => {
  let validation: ValidationProvider;
  let mockData: MockDataProvider;

  beforeEach(async () => {
    const app: Awaited<TestingModule> = await Test.createTestingModule({
      providers: [ValidationProvider, MockDataProvider, PrismaProvider],
    }).compile();

    validation = app.get<ValidationProvider>(ValidationProvider);
    mockData = app.get<MockDataProvider>(MockDataProvider);
  });

  describe("Blank Payload", () => {
    it("should be return false when the sended object has a value", () => {
      expect(validation.blankPayload(new Object({ test: 1 }))).toBe(false);
    });
    it("should be return true when the sended object was empty", () => {
      expect(validation.blankPayload(new Object())).toBe(true);
    });
  });

  describe("Invalid File Size", () => {
    it("should be return true when the image file size is more than 1mb", () => {
      expect(
        validation.invalidFileSize({
          file: mockData.dummyLargeFilePicture() as Express.Multer.File,
          size: 1,
        })
      ).toBe(true);
    });
    it("should be return false when the image file size is less than 1mb", () => {
      expect(
        validation.invalidFileSize({
          file: mockData.dummyPicture() as Express.Multer.File,
          size: 1,
        })
      ).toBe(false);
    });
    it("should be return false when the image file is broken", () => {
      expect(
        validation.invalidFileSize({
          file: mockData.dummyBrokenPicture() as Express.Multer.File,
          size: 1,
        })
      ).toBe(false);
    });
  });

  describe("Invalid File Extension", () => {
    it("should be return true if the file wasn't a picture", () => {
      expect(validation.invalidPictureExt(mockData.dummyFile().mimetype)).toBe(
        true
      );
    });
    it("should be return false if the file was a picture", () => {
      expect(
        validation.invalidPictureExt(mockData.dummyPicture().mimetype)
      ).toBe(false);
    });
    it("should be return true if the picture extension wasn't supported", () => {
      expect(validation.invalidPictureExt("image/gif")).toBe(true);
    });
  });

  describe("Invalid Picture", () => {
    it("should be return true if the picture was invalid", () => {
      expect(validation.invalidPicture(mockData.dummyFile().mimetype)).toBe(
        true
      );
    });
    it("should be return false if the picture was a valid picture", () => {
      expect(validation.invalidPicture(mockData.dummyPicture().mimetype)).toBe(
        false
      );
    });
  });

  describe("Broken Picture", () => {
    it("should be detect if the picture was broken", async () => {
      expect(
        await validation.brokenPicture(mockData.dummyBrokenPicture().buffer)
      ).toBe(true);
    });
    it("should be return false if the picture wasn't a broken picture", async () => {
      expect(
        await validation.brokenPicture(mockData.dummyPicture().buffer)
      ).toBe(false);
    });
    it("should be return true if the file wasn't a picture", async () => {
      expect(await validation.brokenPicture(mockData.dummyFile().buffer)).toBe(
        true
      );
    });
  });
});
