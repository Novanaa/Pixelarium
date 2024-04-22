import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaProvider) {}

  public async findByName(name: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { name } });
  }

  public async findByOriginCode(origin_code: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { origin_code } });
  }

  public async deleteByName(name: string): Promise<void> {
    await this.prisma.user.delete({ where: { name } });
  }

  public async usernameAlreadyTaken(name: string): Promise<boolean> {
    return (await this.prisma.user.count({ where: { name } })) > 0;
  }

  public async updateByName(name: string, payload: Partial<User>) {
    return await this.prisma.user.update({ where: { name }, data: payload });
  }
}
