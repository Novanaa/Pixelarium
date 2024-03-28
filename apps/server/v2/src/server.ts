import { INestApplication, Logger } from "@nestjs/common";
import env from "./configs/env";
import { PrismaProvider } from "./libs/providers";
import { GeneratorProvider } from "test/providers";
import { MockDataProvider } from "./common/providers";

export default async function startServer(
  app: INestApplication
): Promise<void> {
  const logger: Logger = new Logger("ApplicationServer");
  const prisma: PrismaProvider = new PrismaProvider();
  const mockData: MockDataProvider = new MockDataProvider(prisma);
  const generator: GeneratorProvider = new GeneratorProvider(mockData, prisma);
  try {
    await app.listen(env.port);

    await generator.generateUser();
  } catch (err) {
    logger.error(err);
  } finally {
    await prisma.$disconnect();
  }
}
