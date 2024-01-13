import express from "express";
import userFavoritePictures from "../controllers/favorites.get.controller";
const router: express.Router = express.Router();

router.get("/:name", userFavoritePictures);

export default router;
