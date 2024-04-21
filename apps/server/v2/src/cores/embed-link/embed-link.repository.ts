import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmbedLinkRepository {
  constructor(private readonly prisma: PrismaProvider) {}
}
