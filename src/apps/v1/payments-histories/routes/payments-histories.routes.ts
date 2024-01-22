import express from "express";
import userPaymentsHistories from "../controllers/payments-histories.get.controller";
const router: express.Router = express.Router();

router.get("/:name", userPaymentsHistories);

export default router;
