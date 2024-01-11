import express from "express";
import userPictureEmbedLinks from "../controllers/embed-links.get.controller";
const router: express.Router = express.Router();

router.get("/:name/:uniquekey", userPictureEmbedLinks);

export default router;
