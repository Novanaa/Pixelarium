import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientKeysRepository {
  constructor(private readonly prisma: PrismaProvider) {}
}
