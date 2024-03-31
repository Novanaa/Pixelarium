import * as fs from "fs";
import { Injectable, Logger } from "@nestjs/common";
import { MockDataProvider, StaticDirectoryProvider } from "@/common/providers";
import { PrismaProvider } from "@/libs/providers";
import { Environment } from "@/configs/readonly";

@Injectable()
export class LifecycleProvider {
  constructor(
    private readonly staticDirectory: StaticDirectoryProvider,
    private readonly prisma: PrismaProvider,
    private readonly mockData: MockDataProvider
  ) {}

  private readonly logger: Logger = new Logger("LifecycleTest");

  private envChecker(): boolean {
    return (
      Environment.NODEENV == "development" || Environment.NODEENV == "staging"
    );
  }

  public async ModuleTestInit() {
    try {
      if (!this.envChecker() && !(await this.prisma.user.count())) return;

      await Promise.all(
        Array.from({ length: 5 }, () => this.mockData.createRandomUser())
      );

      this.logger.log("User Generator Has Successfully Generate 5 User");
    } catch (err) {
      this.logger.error(err);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async cleanUpDatabase(): Promise<void> {
    try {
      await Promise.all([
        this.prisma.user.deleteMany(),
        this.prisma.album.deleteMany(),
        this.prisma.embedLinks.deleteMany(),
        this.prisma.clientKey.deleteMany(),
        this.prisma.favorite.deleteMany(),
        this.prisma.gallery.deleteMany(),
        this.prisma.paymentsHistory.deleteMany(),
        this.prisma.picture.deleteMany(),
        this.prisma.subscription.deleteMany(),
      ]);
    } catch (err) {
      this.logger.error(err);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public cleanUpDirectory(): void {
    try {
      const avatarDirpath: string =
        this.staticDirectory.getUserAvatarDirectory();
      const galleryDirpath: string = "./public/galleries/";

      const avatarFiles: Array<string> = fs.readdirSync(avatarDirpath);
      const galleryFiles: Array<string> = fs.readdirSync(galleryDirpath);

      galleryFiles.map((file: string) => {
        const galleryFilepath: string = galleryDirpath + file;

        if (!fs.existsSync(galleryFilepath)) return;

        fs.rmSync(galleryFilepath, { recursive: true, force: true });

        fs.mkdirSync(this.staticDirectory.getUserGalleryDirectory("itsnvaa"));
        fs.writeFileSync(
          this.staticDirectory.getUserGalleryDirectory("itsnvaa", "test.png"),
          "utf-8"
        );
      });

      avatarFiles.map((file: string) => {
        const avatarFilepath: string =
          this.staticDirectory.getUserAvatarDirectory(file);

        if (!fs.existsSync(avatarFilepath)) return;

        fs.unlinkSync(avatarFilepath);

        fs.writeFileSync(
          this.staticDirectory.getUserAvatarDirectory("test.png"),
          "utf-8"
        );
      });
    } catch (err) {
      this.logger.error(err);
    }
  }
}
