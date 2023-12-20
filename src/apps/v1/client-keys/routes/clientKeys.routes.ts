import express from "express";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import generateSecretKey from "../controllers/client-keys.post.controller";
import getClientSecret from "../controllers/client-keys.get.controller";
const router = express.Router();

router.post("/generate", jsonWebTokenAuthorization, generateSecretKey);
router.get("/:name", jsonWebTokenAuthorization, getClientSecret);

export default router;
