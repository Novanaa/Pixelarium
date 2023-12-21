import express from "express";
const router = express.Router();
import deleteUser from "../controllers/user.delete.controller";
import updateUser from "../controllers/user.update.controller";
import singleUser from "../controllers/user.get.controller";
import jsonWebTokenAuthorization from "../../../../middlewares/jsonWebTokenAuthorization";
import apiGrantAccess from "../../../../middlewares/apiGrantAccess";

router.get("/:name", apiGrantAccess, singleUser);
router.patch("/:id", apiGrantAccess, updateUser);
router.delete("/:id", [jsonWebTokenAuthorization, apiGrantAccess], deleteUser);

export default router;
