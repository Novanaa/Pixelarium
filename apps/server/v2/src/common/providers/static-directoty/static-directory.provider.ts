import * as path from "path";
import { Injectable } from "@nestjs/common";
import { Environment } from "@/configs/readonly";

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
    return `${Environment.HOSTNAME}/avatar/${filename}`;
  }

  public getUserGalleryUrlpath(name: string, filename: string) {
    return `${Environment.HOSTNAME}/galleries/${name}/${filename}`;
  }
}
