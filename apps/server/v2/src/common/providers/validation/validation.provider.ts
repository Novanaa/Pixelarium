import { Injectable } from "@nestjs/common";
import { ZodType } from "zod";

@Injectable()
export class ValidationProvider {
  public validate<T>(schema: ZodType<T>, payload: T): T {
    return schema.parse(payload);
  }

  public blankPayload<T>(payload: T): boolean {
    return !Object.keys(payload).length;
  }
}
