import express from "express";
import { userAlbums } from "../controllers/user-albums.get.controller";
const router: express.Router = express.Router();

router.get("/:name", userAlbums);

export default router;
