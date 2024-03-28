import { User } from "@prisma/client";
import * as falso from "@ngneat/falso";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers/prisma-client/prisma.provider";
import slugify from "slugify";

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
      name: slugify(falso.randUserName(), { lower: true }),
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
}
