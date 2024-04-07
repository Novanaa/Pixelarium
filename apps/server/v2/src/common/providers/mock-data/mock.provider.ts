import * as fs from "fs";
import slugify from "slugify";
import * as crypto from "crypto";
import { User } from "@prisma/client";
import * as falso from "@ngneat/falso";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers/prisma-client/prisma.provider";
import { PictureConstant } from "@/constant/picture.constant";
import { GeneratedClientKeysCredentials } from "@/cores/client-keys/providers/credentials/credentials";

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
    const originCode: number = falso.randNumber();
    const name: string = slugify(falso.randUserName(), {
      lower: true,
      remove: /\d+/,
    });

    return {
      name,
      email: falso.randEmail(),
      avatar: falso.randAvatar(),
      bio: falso.randSentence(),
      is_member: falso.randBoolean(),
      origin_code: originCode,
      type: "Admin",
      password: falso.randPassword(),
    };
  }

  public generateRandomClientCredentialsKeys() {
    const credentials: GeneratedClientKeysCredentials = {
      clientId: crypto
        .createHash("md5")
        .update(falso.randUserName())
        .digest("hex"),
      clientSecret: crypto
        .createHash("sha256")
        .update(String(falso.randNumber()))
        .digest("hex"),
    };

    return {
      client_id: credentials.clientId,
      client_secret: credentials.clientSecret,
    };
  }

  public async createRandomUser(): Promise<User> {
    try {
      return await this.prisma.user.create({
        data: {
          ...this.generateRandomUser(),
          client_key: {
            create: {
              ...this.generateRandomClientCredentialsKeys(),
            },
          },
        },
      });
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
