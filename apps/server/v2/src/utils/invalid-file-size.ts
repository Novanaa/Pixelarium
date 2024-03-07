import type { default as FileData } from "@/interfaces/file";

interface InvalidFileSizeParams {
  file: FileData;
  size: number;
}

export default function invalidFileSize({
  file,
  size,
}: InvalidFileSizeParams): boolean {
  return file.data.length > size * 1024 * 1024;
}
