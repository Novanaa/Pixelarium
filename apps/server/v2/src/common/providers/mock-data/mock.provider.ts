import * as fs from "fs";
import slugify from "slugify";
import * as crypto from "crypto";
import * as falso from "@ngneat/falso";
import { Injectable } from "@nestjs/common";
import { PictureConstant } from "@/constant/picture.constant";
import { EmbedLinks, Picture, PictureType, User } from "@prisma/client";
import { PrismaProvider } from "@/libs/providers/prisma-client/prisma.provider";
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

  public generateRandomPicture(type?: PictureType): Partial<Picture> {
    const binary: Buffer = fs.readFileSync(
      PictureConstant.DUMMY_PICTUREPATH.jpeg
    );
    const data: string = binary.toString("base64");
    const dummyPictureLink: string =
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";

    const picture: Partial<Picture> = {
      title: falso.randSentence(),
      description: falso.randProductDescription(),
      extension: falso.randMimeType(),
      expires_time: {
        expires_date: new Date().getTime(),
        interval: "Years",
        expires_in: "1 Years",
      },
      filename: falso.randFileName(),
      data,
      binary,
      size: falso.randNumber(),
      status: falso.rand(["Private", "Public"]),
    };

    const externalPicture: Partial<Picture> = {
      ...picture,
      data: dummyPictureLink,
      binary: null,
      type: "External",
    };

    const internalPicture: Partial<Picture> = { ...picture, type: "Internal" };

    if (type) {
      if (type == "External") return externalPicture;
      if (type == "Internal") return internalPicture;
    }

    if (picture.type == "External") return externalPicture;

    return internalPicture;
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
          gallery: {
            create: {
              pictures: {
                create: {
                  ...(this.generateRandomPicture() as Picture),
                  embed_links: {
                    create: this.generateRandomPictureEmbedLink() as EmbedLinks,
                  },
                },
              },
            },
          },
          favorite: {
            create: {
              total: 0,
            },
          },
        },
      });
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public generateRandomPictureEmbedLink(): Partial<EmbedLinks> {
    const pictureLink: string = falso.randUrl();

    return {
      direct_links: {
        image_link: "https://pixelarium.my.id/picture/" + pictureLink,
        image_url: pictureLink,
      },
      html_links: {
        anchor_link: `<a href="${pictureLink}">${pictureLink}</a>`,
        img_link: `<img src="${pictureLink}" />`,
      },
      markdown_links: {
        tooltip_link: `[picture](${pictureLink})`,
      },
    };
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
