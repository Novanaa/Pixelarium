import express from "express";
import addUserGalleryPicture from "../controllers/upload.pictures.controller";
import {
  deleteAllUserPictures,
  deleteSingleExistingUserPicture,
} from "../controllers/delete.pictures.controller";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import verifySessionToken from "../../../../middlewares/verifySessionToken";
import updateUserPicture from "../controllers/patch.pictures.controller";
const router = express.Router();

router.post("/:name/upload", addUserGalleryPicture);
router.delete(
  "/:name/removes",
  [jsonWebTokenAuthorization, verifySessionToken],
  deleteAllUserPictures
);
router.delete(
  "/:name/:uniquekey",
  [jsonWebTokenAuthorization, verifySessionToken],
  deleteSingleExistingUserPicture
);
router.patch("/:name/:uniquekey", updateUserPicture);

export default router;
