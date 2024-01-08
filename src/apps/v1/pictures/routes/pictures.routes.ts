import express from "express";
import addUserGalleryPicture from "../controllers/upload.pictures.controller";
import { deleteAllUserPictures } from "../controllers/delete.pictures.controller";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import verifySessionToken from "../../../../middlewares/verifySessionToken";
const router = express.Router();

router.post("/:name/upload", addUserGalleryPicture);
router.delete(
  "/:name/removes",
  [jsonWebTokenAuthorization, verifySessionToken],
  deleteAllUserPictures
);

export default router;
