import express from "express";
import userPictureEmbedLinks from "../controllers/embed-links.get.controller";
import addEmbedLinksPicture from "../controllers/embed-links.post.controller";
import apiGrantAccess from "../../../../middlewares/apiGrantAccess";
const router: express.Router = express.Router();

router.get("/:name/:uniquekey", userPictureEmbedLinks);
router.post("/:name/:uniquekey", apiGrantAccess, addEmbedLinksPicture);

export default router;
