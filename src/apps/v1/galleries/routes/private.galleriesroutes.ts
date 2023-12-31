import express from "express";
import { gallery } from "../controllers/galleries.get.controller";
const router = express.Router();

router.get("/:name", gallery);

export default router;
