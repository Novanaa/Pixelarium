import express from "express";
import {
  singleUserAlbum,
  userAlbums,
} from "../controllers/user-albums.get.controller";
import {
  addAlbumPicture,
  addUserAlbum,
} from "../controllers/user-albums.post.controller";
const router: express.Router = express.Router();

router.get("/:name", userAlbums);
router.post("/:name", addUserAlbum);
router.get("/:name/:albumId", singleUserAlbum);
router.post("/:name/:albumId/:uniquekey", addAlbumPicture);

export default router;
