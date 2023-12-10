import express from "express";
const router = express.Router();
import deleteUser from "../controllers/user.delete.controller";
import updateUser from "../controllers/user.update.controller";

router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
