import express from "express";
import {
  prices,
  userSubscriptionStatus,
} from "../controllers/subscription.get.controller";
import deacitivateUserSubscription from "../controllers/subscription.delete.controller";
const router: express.Router = express.Router();

router.get("/prices", prices);
router.get("/status/:name", userSubscriptionStatus);
router.delete("/deactivate/:name", deacitivateUserSubscription);

export default router;
