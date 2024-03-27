import * as path from "path";
import { Injectable } from "@nestjs/common";
import env from "@/configs/env";

@Injectable()
export class StaticDirectoryProvider {
  public getUserAvatarDirectory(filename?: string): string {
    const dirpath: string = "./public/avatar";

    return filename ? path.join(dirpath, filename) : dirpath;
  }

  public getUserGalleryDirectory(name: string, filename?: string): string {
    const dirpath: string = "./public/galleries/" + name;

    return filename ? path.join(dirpath, filename) : dirpath;
  }

  public getUserAvatarUrlpath(filename: string) {
    return `${env.hostname}/avatar/${filename}`;
  }

  public getUserGalleryUrlpath(name: string, filename: string) {
    return `${env.hostname}/galleries/${name}/${filename}`;
  }
}
