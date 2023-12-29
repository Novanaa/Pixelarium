import express from "express";
const router = express.Router();
import updateUser from "../controllers/user.update.controller";
import singleUser from "../controllers/user.get.controller";
import apiGrantAccess from "../../../../middlewares/apiGrantAccess";

router.get("/:name", singleUser);
router.patch("/:id", apiGrantAccess, updateUser);

export default router;
