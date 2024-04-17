import * as joi from "joi";
import { ErrorProvider } from "@/common/providers";
import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ValidationPipe<T> implements PipeTransform {
  constructor(private readonly schema: joi.ObjectSchema<T>) {}

  transform(value: T) {
    try {
      return this.schema.validate(value);
    } catch (error) {
      const err: Error = error as Error;

      throw new BadRequestException(
        new ErrorProvider().badRequest(err.message)
      );
    }
  }
}
