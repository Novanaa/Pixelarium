import * as joi from "joi";
import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ValidationPipe<T> implements PipeTransform {
  constructor(private readonly schema: joi.ObjectSchema<T>) {}

  transform(value: T) {
    const validatedPayload: joi.ValidationResult<T> =
      this.schema.validate(value);

    if (validatedPayload.error)
      throw new BadRequestException(validatedPayload.error.message);

    return validatedPayload.value;
  }
}
