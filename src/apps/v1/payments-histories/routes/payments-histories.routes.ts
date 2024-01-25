import express from "express";
import userPaymentsHistories from "../controllers/payments-histories.get.controller";
import updateUserPaymentHistory from "../controllers/payments-histories.patch.controller";
import addPaymentHistory from "../controllers/payments-histories.post.controller";
const router: express.Router = express.Router();

router.get("/:name", userPaymentsHistories);
router.post("/:name", addPaymentHistory);
router.patch("/:name/:orderId", updateUserPaymentHistory);

export default router;
