import { PrismaService } from "@/libs/prisma.service";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

@Injectable()
export class MockDataProvider {
  constructor(private readonly prisma: PrismaService) {}

  public async getRandomser(): Promise<User> {
    return await this.prisma.user.findFirst();
  }
}
