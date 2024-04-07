import * as fs from "fs";
import { User } from "@prisma/client";
import * as falso from "@ngneat/falso";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers/prisma-client/prisma.provider";
import slugify from "slugify";
import { PictureConstant } from "@/constant/picture.constant";
import {
  GenerateClientKeysCredentialsParams,
  GeneratedClientKeysCredentials,
} from "@/cores/client-keys/providers/credentials/credentials";
import { CredentialsProvider } from "@/cores/client-keys/providers";

@Injectable()
export class MockDataProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly clientKeysCredentials: CredentialsProvider
  ) {}

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

  public generateRandomClientCredentialsKeys(
    param: GenerateClientKeysCredentialsParams
  ) {
    const credentials: GeneratedClientKeysCredentials =
      this.clientKeysCredentials.generateClientKeys({
        name: param.name,
        originCode: param.originCode,
      });

    return {
      client_id: credentials.clientId,
      client_secret: credentials.clientSecret,
    };
  }

  public async createRandomUser(): Promise<User> {
    try {
      const generatedUser = this.generateRandomUser();
      const generatedClientKeys = this.generateRandomClientCredentialsKeys({
        name: generatedUser.name,
        originCode: generatedUser.origin_code,
      });

      return await this.prisma.user.create({
        data: {
          ...generatedUser,
          client_key: {
            create: {
              ...generatedClientKeys,
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
