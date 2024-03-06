/* eslint-disable semi */

import type File from "@/interfaces/file";

export default interface UpdateUserPayload {
  name: string;
  bio: string;
  email: string;
  avatar: File;
}
