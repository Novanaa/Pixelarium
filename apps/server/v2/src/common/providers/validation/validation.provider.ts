import { ObjectSchema, ValidationResult } from "joi";
import { Injectable } from "@nestjs/common";
import { InvalidFileSizeParam } from "./validation.dto";

@Injectable()
export class ValidationProvider {
  public validate<T>(schema: ObjectSchema<T>, payload: T): ValidationResult<T> {
    return schema.validate(payload);
  }

  public blankPayload<T>(payload: T): boolean {
    return !Object.keys(payload).length;
  }

  public invalidFileSize({ file, size }: InvalidFileSizeParam) {
    return file.buffer.length > size * 1024 * 1024;
  }
}
