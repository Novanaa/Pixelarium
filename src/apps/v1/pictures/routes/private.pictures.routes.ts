import express from "express";
import addUserGalleryPicture from "../controllers/upload.pictures.controller";
import apiGrantAccess from "../../../../middlewares/apiGrantAccess";
import updateUserPicture from "../controllers/patch.pictures.controller";
import singleUserPicture from "../controllers/pictures.get.controller";
const router = express.Router();

router.post("/:name/upload", apiGrantAccess, addUserGalleryPicture);
router.patch("/:name/:uniquekey", apiGrantAccess, updateUserPicture);
router.get("/:uniquekey", singleUserPicture);

export default router;
