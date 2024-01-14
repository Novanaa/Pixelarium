import express from "express";
import userFavoritePictures from "../controllers/favorites.get.controller";
import addFavoritePictureByName from "../controllers/favorites.post.controller";
import deleteFavoritePicture from "../controllers/favorites.delete.controller";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import verifySessionToken from "../../../../middlewares/verifySessionToken";
const router: express.Router = express.Router();

router.get("/:name", userFavoritePictures);
router.post("/:name/:uniquekey", addFavoritePictureByName);
router.delete(
  "/:name/:uniquekey",
  [jsonWebTokenAuthorization, verifySessionToken],
  deleteFavoritePicture
);

export default router;
