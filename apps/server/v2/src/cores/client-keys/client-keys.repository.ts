import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";
import { ClientKey } from "@prisma/client";

@Injectable()
export class ClientKeysRepository {
  constructor(private readonly prisma: PrismaProvider) {}

  public async findByUserId(userId: string): Promise<ClientKey> {
    return await this.prisma.clientKey.findUnique({
      where: { user_id: userId },
    });
  }
}
