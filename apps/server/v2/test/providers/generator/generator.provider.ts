import { MockDataProvider } from "@/common/providers";
import env from "@/configs/env";
import { PrismaProvider } from "@/libs/providers";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class GeneratorProvider {
  constructor(
    private readonly mockData: MockDataProvider,
    private readonly prisma: PrismaProvider
  ) {}

  private readonly logger: Logger = new Logger("MockGenerator");

  private envChecker(): boolean {
    return env.nodeEnv == "development" || env.nodeEnv == "staging";
  }

  public async generateUser(): Promise<void> {
    try {
      if (this.envChecker() && (await this.prisma.user.count()) < 1) {
        await Promise.all(
          Array.from({ length: 5 }, () => this.mockData.createRandomUser())
        );

        this.logger.log("User Generator Has Successfully Generate 5 User");
      }
    } catch (err) {
      this.logger.error(err);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
