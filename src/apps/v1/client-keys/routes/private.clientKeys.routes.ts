import express from "express";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import generateSecretKey from "../controllers/client-keys.post.controller";
import getClientSecret from "../controllers/client-keys.get.controller";
import removeClientKey from "../controllers/client-keys.delete.controller";
import apiGrantAccess from "../../../../middlewares/apiGrantAccess";
const router = express.Router();

router.post(
  "/generate",
  [jsonWebTokenAuthorization, apiGrantAccess],
  generateSecretKey
);
router.get(
  "/:name",
  [jsonWebTokenAuthorization, apiGrantAccess],
  getClientSecret
);
router.delete(
  "/",
  [jsonWebTokenAuthorization, apiGrantAccess],
  removeClientKey
);

export default router;
