import express from "express";
const router = express.Router();
import deleteUser from "../controllers/user.delete.controller";

router.delete("/:id", deleteUser);

export default router;
