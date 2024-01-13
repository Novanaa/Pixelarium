import express from "express";
import userFavoritePictures from "../controllers/favorites.get.controller";
import addFavoritePictureByName from "../controllers/favorites.post.controller";
const router: express.Router = express.Router();

router.get("/:name", userFavoritePictures);
router.post("/:name", addFavoritePictureByName);

export default router;
