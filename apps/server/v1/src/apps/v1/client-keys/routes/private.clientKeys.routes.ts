import express from "express";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import generateSecretKey from "../controllers/client-keys.post.controller";
import removeClientKey from "../controllers/client-keys.delete.controller";
import apiGrantAccess from "../../../../middlewares/apiGrantAccess";
const router = express.Router();

router.post(
  "/generate",
  [jsonWebTokenAuthorization, apiGrantAccess],
  generateSecretKey
);
router.delete(
  "/",
  [jsonWebTokenAuthorization, apiGrantAccess],
  removeClientKey
);

export default router;
