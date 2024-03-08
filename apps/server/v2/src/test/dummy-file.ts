import nodePath from "path"
import fs from "fs";
import mime from "mime";
import type { default as FileData } from "@/interfaces/file";
import { CryptoHasher } from "bun";
import logger from "@/libs/logger";

/**
 * This TypeScript function reads a file from a given path and returns metadata about the file in a
 * structured format.
 * @param {string} path - The `path` parameter is a string that represents the file path from which the
 * data will be read to create the `FileData` object.
 * @returns The function `dummyFile` is returning an object of type `FileData` with the following
 * properties:
 * - `data`: A Buffer containing the file data read from the specified path.
 * - `name`: A string value "dummy.jpg".
 * - `md5`: The MD5 hash of the file name "dummy.jpg".
 * - `mimetype`: A string value "image/jpeg".
 * - `mv
 */
export default function dummyFile(path: string): FileData {
  const buffer: Buffer = fs.readFileSync(path);
  const name: string = nodePath.basename(path) 
  const mimetype: string = mime.getType(name) && "image/jpeg"

  return {
    data: buffer,
    name,
    md5: new CryptoHasher("md5").update(name).digest("hex"),
    mimetype,
    mv: (path: string) => logger.info(path),
    size: buffer.length,
    truncated: false,
    tempFilePath: path,
    encoding: "utf-8",
  };
}
