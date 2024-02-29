import express from "express";
import userPictureEmbedLinks from "../controllers/embed-links.get.controller";
import addEmbedLinksPicture from "../controllers/embed-links.post.controller";
const router: express.Router = express.Router();

router.get("/:name/:uniquekey", userPictureEmbedLinks);
router.post("/:name/:uniquekey", addEmbedLinksPicture);

export default router;
