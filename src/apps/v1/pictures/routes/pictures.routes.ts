import express from "express";
import addUserGalleryPicture from "../controllers/upload.pictures.controller";
const router = express.Router();

router.post("/:name/upload", addUserGalleryPicture);

export default router;
