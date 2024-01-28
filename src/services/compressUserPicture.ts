import sharp from "sharp";
import fs from "fs";

type CompressUserPictureParams = {
  data: Buffer;
  path: string;
};

/**
 * Compresses a user picture and saves it to a specified path.
 *
 * @param {CompressUserPictureParams} params - The parameters for compressing the user picture.
 * @param {Buffer} params.data - The data of the user picture to be compressed.
 * @param {string} params.path - The path where the compressed user picture will be saved.
 * @returns {Promise<void>} - A promise that resolves when the user picture is compressed and saved successfully.
 */
export default async function compressUserPicture({
  data,
  path,
}: CompressUserPictureParams): Promise<void> {
  const buffer: Awaited<Buffer> = await sharp(data)
    .png({ compressionLevel: 2, quality: 85, palette: true, effort: 1 })
    .toBuffer();

  fs.writeFileSync(path, buffer, "binary");
}
