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

  static readonly DUMMY_PICTUREPATH = {
    "80mb": "./public/test/80mb.png",
    "20mb": "./public/test/20mb.png",
    "40mb": "./public/test/40mb.png",
    avif: "./public/test/test.avif",
    jpeg: "./public/test/test.jpg",
    sgi: "./public/test/test.sgi",
    json: "./public/test/test.json",
    broken: "./public/test/test.png",
  };

  static readonly DEFAULT_AVATAR: string =
    "https://i.ibb.co/vC9jN2s/IMG-mths7.jpg";
}
