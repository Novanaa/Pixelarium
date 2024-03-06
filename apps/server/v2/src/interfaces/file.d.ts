/* eslint-disable semi */
/* eslint-disable no-unused-vars */

export default interface File {
  name: string;
  data: Buffer;
  size: number;
  encoding: string;
  tempFilePath: string;
  truncated: boolean;
  mimetype: string;
  md5: string;
  mv: (path: string) => void;
}
