import express from "express";
import {
  singleUserAlbum,
  userAlbums,
} from "../controllers/user-albums.get.controller";
const router: express.Router = express.Router();

router.get("/:name", userAlbums);
router.get("/:name/:albumId", singleUserAlbum);

export default router;
