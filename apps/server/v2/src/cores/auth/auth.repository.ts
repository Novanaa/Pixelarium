import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaProvider) {}
}
