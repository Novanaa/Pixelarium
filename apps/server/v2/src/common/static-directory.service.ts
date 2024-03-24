import * as path from "path";
import { Injectable } from "@nestjs/common";

@Injectable()
export class StaticDirectorySerive {
  public getUserAvatarDirectory(filename?: string): string {
    const dirpath: string = "./public/avatar";

    return filename ? path.join(dirpath, filename) : dirpath;
  }

  public getUserGalleryDirectory(name: string, filename?: string): string {
    const dirpath: string = "./public/galleries/" + name;

    return filename ? path.join(dirpath, filename) : dirpath;
  }
}
