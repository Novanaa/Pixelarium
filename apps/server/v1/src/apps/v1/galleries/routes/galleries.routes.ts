import express from "express";
import {
  gallery,
  searchPicturesGallery,
} from "../controllers/galleries.get.controller";
const router = express.Router();

router.get("/:name", gallery);
router.get("/:name/search", searchPicturesGallery);

export default router;
