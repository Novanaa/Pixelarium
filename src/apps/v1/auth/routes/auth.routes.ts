import express from "express";
const router = express.Router();
import {
  loginWithGoogle,
  redirectGoogleLogin,
} from "../controllers/google.auth.controller";
import { redirectGithubLogin } from "../controllers/github.auth.controller";

router.get("/google", redirectGoogleLogin);
router.get("/google/callback", loginWithGoogle);
router.get("/github", redirectGithubLogin);

export default router;
