import express from "express";
import {
  prices,
  userSubscriptionStatus,
} from "../controllers/subscription.get.controller";
const router: express.Router = express.Router();

router.get("/prices", prices);
router.get("/status/:name", userSubscriptionStatus);

export default router;
