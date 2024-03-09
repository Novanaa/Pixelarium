import path from "path";
import { test, expect, describe } from "bun:test";
import prettifyFilename from "../prettify-filename";
import { randFileName } from "@ngneat/falso";
import slugify from "slugify";
import moment from "moment";

describe("Prettify Filename", () => {
  test("prettied filename should be return string data type", () => {
    expect(prettifyFilename("testt")).toBeString();
  });
  test("prettied filename should be included raw filename", () => {
    const param: string = "test";

    expect(prettifyFilename(param)).toContain(param);
  });
  test("prettified raw filename should be return lowercase string", () => {
    const param: string = "Testt";

    expect(prettifyFilename(param)).toContain(param.toLowerCase());
  });
  test("raw filename should be slugified", () => {
    const param: string = "Testt Heheheh";

    expect(prettifyFilename(param)).toContain(slugify(param, { lower: true }));
  });
  test("prettified filename should be not included extension", () => {
    const param: string = randFileName();

    expect(prettifyFilename(param)).not.toContain(path.extname(param));
  });
  test("prettified filename should be include LL date data format", () => {
    const now: number = new Date().getTime();
    const date: string = slugify(moment(now).format("LL"), { lower: true });
    const param: string = randFileName();

    expect(prettifyFilename(param)).toContain(date);
  });
  test("prettified filename should be include LTS date time data format", () => {
    const now: number = new Date().getTime();
    const time: string = slugify(moment(now).format("LTS").replace(/:/g, "-"));
    const param: string = randFileName();

    expect(prettifyFilename(param)).toContain(time);
  });
});
