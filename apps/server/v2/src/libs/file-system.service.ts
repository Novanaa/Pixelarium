import * as fs from "fs";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FileSystemService {
  public deleteFile(path: string): void {
    if (fs.existsSync(path)) fs.unlinkSync(path);
  }
}
