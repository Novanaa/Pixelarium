import { expect, test, describe } from "bun:test";
import getFilename from "../getFilename";

describe("Unit-Testing getFilename utils", () => {
  test("should be return the filename", () => {
    const fileName: string | null = getFilename("./prisma/schema.prisma");

    console.log({ fileName });
    expect(fileName).toBeDefined;
  });
  test("should be type of string", () => {
    const fileName: string | null = getFilename("./prisma/schema.prisma");

    expect(fileName).toBeString();
  });
});
