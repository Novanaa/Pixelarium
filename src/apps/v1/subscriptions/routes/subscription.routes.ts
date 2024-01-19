import express from "express";
import { prices } from "../controllers/subscription.get.controller";
const router: express.Router = express.Router();

router.get("/prices", prices);

export default router;
