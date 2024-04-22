import { ErrorProvider } from "@/common/providers";
import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class EmptyPayloadValidationPipe implements PipeTransform {
  transform(value: Record<string, string>) {
    if (!Object.keys(value).length)
      throw new BadRequestException(
        new ErrorProvider().badRequest(
          "The request you made is missing the required request body. Please provide the necessary data in the request body to proceed."
        )
      );

    return value;
  }
}
