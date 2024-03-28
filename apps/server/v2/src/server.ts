import { INestApplication, Logger } from "@nestjs/common";
import env from "./configs/env";
import { PrismaProvider } from "./libs/providers";

export default async function startServer(
  app: INestApplication
): Promise<void> {
  const logger: Logger = new Logger("ApplicationServer");
  const prisma: PrismaProvider = new PrismaProvider();
  try {
    await app.listen(env.port);
  } catch (err) {
    logger.error(err);
  } finally {
    await prisma.$disconnect();
  }
}
