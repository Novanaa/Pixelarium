import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
const app = express();

// Middlewares
app.use(express.json());
app.use(express.static("./public"));
app.use(
  cors({
    origin: CLIENT_FRONTEND_URL,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(fileUpload());
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(requestErrorValidation);
app.use(rateLimitter);

// Application Routes
import { CLIENT_FRONTEND_URL } from "./const/env";
import requestErrorValidation from "./middlewares/requestErrorValidation";
import rateLimitter from "./middlewares/rateLimitter";
import authRoutes from "./apps/v1/auth/routes/auth.routes";

app.use("/v1/auth", authRoutes);

export default app;
