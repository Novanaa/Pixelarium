import { expect, test, describe } from "bun:test";
import { getFutureDateTimeInSeconds } from "../getFutureDateTime";

describe("Unit-Test Get Future Date Time In Seconds Utils", () => {
  test("returned value should be as Date types", () => {
    const futureDateTime: Date = getFutureDateTimeInSeconds({
      futureDateTimeInSecond: 1900,
    });

    expect(futureDateTime).toBeDate();
  });
  test("returned value should be not undefined", () => {
    const futureDateTime: Date = getFutureDateTimeInSeconds({
      futureDateTimeInSecond: 1900,
    });

    expect(futureDateTime).not.toBeUndefined();
  });
  test("returned value should be defined", () => {
    const futureDateTime: Date = getFutureDateTimeInSeconds({
      futureDateTimeInSecond: 1900,
    });

    expect(futureDateTime).toBeDefined();
  });
});
