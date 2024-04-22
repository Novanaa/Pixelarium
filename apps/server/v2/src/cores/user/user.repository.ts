import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaProvider) {}
}
