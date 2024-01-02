import express from "express";
import addUserGalleryPicture from "../controllers/upload.pictures.controller";
import apiGrantAccess from "../../../../middlewares/apiGrantAccess";
const router = express.Router();

router.post("/:name/upload", apiGrantAccess, addUserGalleryPicture);

export default router;
