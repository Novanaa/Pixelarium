import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import swaggerUi from "swagger-ui-express";
/* `const app = express();` is creating an instance of the Express.js application. This instance will
be used to configure and run the server. */
const app = express();

// Middlewares
/* The code block is setting up and using various middleware functions in an Express.js application. */
app.use(express.json());
app.use(express.static("./public"));
app.use(cors(corsOptions));
app.use(fileUpload());
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(requestErrorValidation);
app.use(rateLimitter);

// Application Routes
/* The code block is importing various modules and routes and using them in the Express.js application. */
import docs from "../docs/openapi.json";
import swaggerOptions from "../docs/configs/SwaggerThemes.config";
import corsOptions from "../configs/cors.config";
import requestErrorValidation from "./middlewares/requestErrorValidation";
import rateLimitter from "./middlewares/rateLimitter";
import authRoutes from "./apps/v1/auth/routes/auth.routes";
import userRoutes from "./apps/v1/users/routes/user.routes";
import clientKeysRoutes from "./apps/v1/client-keys/routes/clientKeys.routes";

app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs, swaggerOptions));
app.use("/v1/auth", authRoutes);
app.use("/v1/users", userRoutes);
app.use("/v1/client-keys", clientKeysRoutes);

// Private Access API Endpoint
import privateClientKeysRoutes from "./apps/v1/client-keys/routes/private.clientKeys.routes";

app.use("/v1/plxm/client-keys", privateClientKeysRoutes);

export default app;
