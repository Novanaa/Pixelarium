import { ObjectSchema, ValidationResult } from "joi";
import { Injectable } from "@nestjs/common";
import { InvalidFileSizeParam } from "./validation.dto";
import { validateBufferMIMEType } from "validate-image-type";
import { PictureConstant } from "@/constant/picture.constant";

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

  public invalidPicture(mime: string): boolean {
    return !mime.includes("image");
  }

  public invalidPictureExt(mime: string) {
    return !PictureConstant.ALLOWED_MIME_TYPES.includes(mime);
  }

  public async brokenPicture(data: Buffer): Promise<boolean> {
    return !(
      await validateBufferMIMEType(data, {
        allowMimeTypes: PictureConstant.ALLOWED_MIME_TYPES,
      })
    ).ok;
  }
}
