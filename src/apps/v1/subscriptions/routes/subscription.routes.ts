import express from "express";
import {
  prices,
  userSubscriptionStatus,
} from "../controllers/subscription.get.controller";
import deactivateUserSubscription from "../controllers/subscription.delete.controller";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import verifySessionToken from "../../../../middlewares/verifySessionToken";
import tokenizer from "../controllers/subscription.post.controller";
const router: express.Router = express.Router();

router.get("/prices", prices);
router.post("/payments/tokenizer/:name", tokenizer);
router.get("/status/:name", userSubscriptionStatus);
router.delete(
  "/deactivate/:name",
  [jsonWebTokenAuthorization, verifySessionToken],
  deactivateUserSubscription
);

export default router;
