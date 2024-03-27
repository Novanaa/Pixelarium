import * as moment from "moment";
import slugify from "slugify";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrettierProvider {
  public prettifyFilename(filename: string): string {
    const now: number = new Date().getTime();
    const basename: string = slugify(filename.toLowerCase().split(".")[0]);
    const date: string = slugify(moment(now).format("LL"), { lower: true });
    const time: string = slugify(moment(now).format("LTS").replace(/:/g, "-"));

    const prettified: string = `${basename}-${date}-${time}`;

    return prettified;
  }
}
