import { expect, test, describe } from "bun:test";
import getFutureDateTime from "../getFutureDateTime";

describe("Unit-Test Get Future Date Time Utils", () => {
  test("returned value should be as Date types", () => {
    const futureDateTime: Date = getFutureDateTime({
      futureDateTimeInSecond: 1900,
    });

    expect(futureDateTime).toBeDate();
  });
  test("returned value should be not undefined", () => {
    const futureDateTime: Date = getFutureDateTime({
      futureDateTimeInSecond: 1900,
    });

    expect(futureDateTime).not.toBeUndefined();
  });
  test("returned value should be defined", () => {
    const futureDateTime: Date = getFutureDateTime({
      futureDateTimeInSecond: 1900,
    });

    expect(futureDateTime).toBeDefined();
  });
});
