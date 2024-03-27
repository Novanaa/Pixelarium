import { Injectable } from "@nestjs/common";

@Injectable()
export class PictureConstant {
  static readonly ALLOWED_MIME_TYPES: Array<string> = [
    "image/png",
    "image/jpeg",
    "image/avif",
    "image/jpeg",
    "image/svg+xml",
    "image/vnd.microsoft.icon",
    "image/vnd.microsoft.icon",
    "image/x-canon-cr2",
    "image/x-sony-arw",
    "image/x-canon-crw",
    "image/x-nikon-nef",
    "image/x-pentax-pef",
    "image/webp",
  ];
}
