import * as path from "path";
import { Injectable } from "@nestjs/common";
import { Environment } from "@/configs";

@Injectable()
export class StaticDirectoryProvider {
  public getUserAvatarDirectory(filename?: string): string {
    const dirpath: string = "./public/avatar";

    return filename ? path.join(dirpath, filename) : dirpath;
  }

  public getUserAvatarUrlpath(filename: string) {
    return `${Environment.HOSTNAME}/avatar/${filename}`;
  }
}
