/* eslint-disable no-console */

import { expect, test, describe } from "bun:test";
import moment from "moment";
import LogMessege from "@/utils/log";

const log: LogMessege = new LogMessege("Unit-test");
describe("Log Messege Instance", () => {
  test("should be return log messege", () => {
    const status: string = "Success";
    const ip: string = "192.0.2.1";
    const expectedLogMessege: string = `${ip} - (Unit-test) - ${status}: Requested at ${moment(new Date().getTime()).format("LLLL")}`;

    expect(log.messege({ ip, status })).toBe(expectedLogMessege);
  });
  test("log status messege should be => Success", () => {
    const status: string = "Success";
    const ip: string = "192.0.2.1";
    const logMessege: string = log.messege({ ip, status });

    console.log(logMessege);
    expect(logMessege.includes(status)).toBeTrue();
  });
  test("log ip messege should be => 192.0.2.1", () => {
    const status: string = "Success";
    const ip: string = "192.0.2.1";
    const logMessege: string = log.messege({ ip, status });

    console.log(logMessege);
    expect(logMessege.includes(ip)).toBeTrue();
  });
  test("log date messege should be formatted", () => {
    const date: string = moment(new Date().getTime()).format("LLLL");
    const status: string = "Success";
    const ip: string = "192.0.2.1";
    const logMessege: string = log.messege({ ip, status });

    console.log(logMessege);
    expect(logMessege.includes(date)).toBeTrue();
  });
  test("log name messege should be => Unit-test", () => {
    const status: string = "Success";
    const ip: string = "192.0.2.1";
    const logMessege: string = log.messege({ ip, status });

    console.log(logMessege);
    expect(logMessege.includes("Unit-test")).toBeTrue();
  });
});
