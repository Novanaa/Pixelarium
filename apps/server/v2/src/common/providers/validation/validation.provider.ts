import { ObjectSchema, ValidationResult } from "joi";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ValidationProvider {
  public validate<T>(schema: ObjectSchema<T>, payload: T): ValidationResult<T> {
    return schema.validate(payload);
  }

  public blankPayload<T>(payload: T): boolean {
    return !Object.keys(payload).length;
  }
}
