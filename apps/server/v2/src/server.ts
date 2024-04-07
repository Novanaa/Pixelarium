import { Environment } from "./configs";
import { PrismaProvider } from "./libs/providers";
import { INestApplication, Logger } from "@nestjs/common";

export default async function startServer(
  app: INestApplication
): Promise<void> {
  const logger: Logger = new Logger("ApplicationServer");
  const prisma: PrismaProvider = new PrismaProvider();
  try {
    await app.listen(Environment.PORT);
  } catch (err) {
    logger.error(err);
  } finally {
    await prisma.$disconnect();
  }
}
