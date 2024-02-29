import express from "express";
import {
  gallery,
  searchPicturesGallery,
} from "../controllers/galleries.get.controller";
import apiGrantAccess from "../../../../middlewares/apiGrantAccess";
const router = express.Router();

router.get("/:name", gallery);
router.get("/:name/search", apiGrantAccess, searchPicturesGallery);

export default router;
