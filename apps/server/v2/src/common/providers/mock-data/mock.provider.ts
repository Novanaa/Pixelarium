import { PrismaProvider } from "@/libs/providers/prisma/prisma.provider";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

@Injectable()
export class MockDataProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  public async getRandomser(): Promise<User> {
    return await this.prisma.user.findFirst();
  }
}
