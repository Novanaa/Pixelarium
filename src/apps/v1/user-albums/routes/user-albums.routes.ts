import express from "express";
import {
  singleUserAlbum,
  userAlbums,
} from "../controllers/user-albums.get.controller";
import {
  addAlbumPicture,
  addUserAlbum,
} from "../controllers/user-albums.post.controller";
import updateUserAlbum from "../controllers/user-albums.patch.controller";
import { deleteUserAlbum } from "../controllers/user-albums.delete.controller";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import verifySessionToken from "../../../../middlewares/verifySessionToken";
const router: express.Router = express.Router();

router.get("/:name", userAlbums);
router.post("/:name", addUserAlbum);
router.get("/:name/:albumId", singleUserAlbum);
router.patch("/:name/:albumId", updateUserAlbum);
router.delete(
  "/:name/:albumId",
  [jsonWebTokenAuthorization, verifySessionToken],
  deleteUserAlbum
);
router.post("/:name/:albumId/:uniquekey", addAlbumPicture);
router.post("/:name/:albumId/:uniquekey", addAlbumPicture);

export default router;
