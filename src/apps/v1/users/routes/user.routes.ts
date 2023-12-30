import express from "express";
const router = express.Router();
import deleteUser from "../controllers/user.delete.controller";
import updateUser from "../controllers/user.update.controller";
import singleUser from "../controllers/user.get.controller";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import verifySessionToken from "../../../../middlewares/verifySessionToken";

router.get("/:name", singleUser);
router.patch("/:name", updateUser);
router.delete(
  "/:name",
  [jsonWebTokenAuthorization, verifySessionToken],
  deleteUser
);

export default router;
