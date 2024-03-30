import * as fs from "fs";
import { User } from "@prisma/client";
import * as falso from "@ngneat/falso";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers/prisma-client/prisma.provider";
import slugify from "slugify";
import { PictureConstant } from "@/constant/picture.constant";

@Injectable()
export class MockDataProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  public async getRandomser(): Promise<User> {
    try {
      return await this.prisma.user.findFirst();
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public generateRandomUser(): Omit<User, "created_at" | "updated_at" | "id"> {
    return {
      name: slugify(falso.randUserName(), { lower: true, remove: /\d+/ }),
      email: falso.randEmail(),
      avatar: falso.randAvatar(),
      bio: falso.randSentence(),
      is_member: falso.randBoolean(),
      origin_code: falso.randNumber(),
      type: "Admin",
      password: falso.randPassword(),
    };
  }

  public async createRandomUser(): Promise<User> {
    try {
      return await this.prisma.user.create({ data: this.generateRandomUser() });
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public dummyPicture(): Partial<Express.Multer.File> {
    const path: string = PictureConstant.DUMMY_PICTUREPATH.jpeg;
    const buffer: Buffer = fs.readFileSync(path);

    return {
      originalname: "test.jpeg",
      buffer,
      mimetype: "image/jpeg",
      path,
      size: buffer.length,
    } satisfies Partial<Express.Multer.File>;
  }

  public dummyBrokenPicture(): Partial<Express.Multer.File> {
    const path: string = PictureConstant.DUMMY_PICTUREPATH.broken;
    const buffer: Buffer = fs.readFileSync(path);

    return {
      originalname: "test.png",
      buffer,
      mimetype: "image/png",
      path,
      size: buffer.length,
    } satisfies Partial<Express.Multer.File>;
  }

  public dummyLargeFilePicture(): Partial<Express.Multer.File> {
    const path: string = PictureConstant.DUMMY_PICTUREPATH["80mb"];
    const buffer: Buffer = fs.readFileSync(path);

    return {
      originalname: "test.png",
      buffer,
      mimetype: "image/png",
      path,
      size: buffer.length,
    } satisfies Partial<Express.Multer.File>;
  }

  public dummyFile(): Partial<Express.Multer.File> {
    const path: string = PictureConstant.DUMMY_PICTUREPATH["json"];
    const buffer: Buffer = fs.readFileSync(path);

    return {
      originalname: "test.json",
      buffer,
      mimetype: "application/json",
      path,
      size: buffer.length,
    } satisfies Partial<Express.Multer.File>;
  }
}
