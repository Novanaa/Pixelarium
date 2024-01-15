import express from "express";
import {
  singleUserAlbum,
  userAlbums,
} from "../controllers/user-albums.get.controller";
import addAlbumPicture from "../controllers/user-albums.post.controller";
const router: express.Router = express.Router();

router.get("/:name", userAlbums);
router.get("/:name/:albumId", singleUserAlbum);
router.post("/:name/:albumId/:uniquekey", addAlbumPicture);

export default router;
