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
import docs from "../docs/pixelarium.json";
import swaggerOptions from "../docs/configs/SwaggerThemes.config";
import corsOptions from "../configs/cors.config";
import requestErrorValidation from "./middlewares/requestErrorValidation";
import verifyUserClientKeys from "./middlewares/verifyUserClientKeys";
import rateLimitter from "./middlewares/rateLimitter";
import authRoutes from "./apps/v1/auth/routes/auth.routes";
import userRoutes from "./apps/v1/users/routes/user.routes";
import clientKeysRoutes from "./apps/v1/client-keys/routes/clientKeys.routes";
import galleriesRoutes from "./apps/v1/galleries/routes/galleries.routes";
import userPicturesRoutes from "./apps/v1/pictures/routes/pictures.routes";
import pictureEmbedLinks from "./apps/v1/embed-links/routes/embed-links.routes";
import userFavoritesPictureRoutes from "./apps/v1/favorites-picture/routes/favorites.routes";
import userAlbumsRoutes from "./apps/v1/user-albums/routes/user-albums.routes";

app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs, swaggerOptions));
app.use("/v1/auth", authRoutes);
app.use("/v1/users", userRoutes);
app.use("/v1/client-keys", clientKeysRoutes);
app.use("/v1/galleries", galleriesRoutes);
app.use("/v1/pictures", userPicturesRoutes);
app.use("/v1/embed-links", pictureEmbedLinks);
app.use("/v1/favorites", userFavoritesPictureRoutes);
app.use("/v1/albums", userAlbumsRoutes);

// Private Access API Endpoint
import privateUserRoutes from "./apps/v1/users/routes/private.user.routes";
import privateGalleriesRoutes from "./apps/v1/galleries/routes/private.galleriesroutes";
import privateUserPicturesRoutes from "./apps/v1/pictures/routes/private.pictures.routes";
import privatePictureEmbedLinksRoutes from "./apps/v1/embed-links/routes/private.embed-links.routes";
import privateUserFavoritesPictureRoutes from "./apps/v1/favorites-picture/routes/private.favorites.routes";
import privateUserAlbumsRoutes from "./apps/v1/user-albums/routes/private.user-albums.routes";

app.use("/v1/plxm/users", [cors(), verifyUserClientKeys], privateUserRoutes);
app.use(
  "/v1/plxm/galleries",
  [cors(), verifyUserClientKeys],
  privateGalleriesRoutes
);
app.use(
  "/v1/plxm/pictures",
  [cors(), verifyUserClientKeys],
  privateUserPicturesRoutes
);
app.use(
  "/v1/plxm/embed-links",
  [cors(), verifyUserClientKeys],
  privatePictureEmbedLinksRoutes
);
app.use(
  "/v1/plxm/favorites",
  [cors(), verifyUserClientKeys],
  privateUserFavoritesPictureRoutes
);
app.use(
  "/v1/plxm/albums",
  [cors(), verifyUserClientKeys],
  privateUserAlbumsRoutes
);

export default app;
