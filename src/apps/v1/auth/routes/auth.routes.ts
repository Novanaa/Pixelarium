import express from "express";
const router = express.Router();
import {
  loginWithGoogle,
  redirectGoogleLogin,
} from "../controllers/google.auth.controller";

router.get("/google", redirectGoogleLogin);
router.get("/google/callback", loginWithGoogle);

export default router;
