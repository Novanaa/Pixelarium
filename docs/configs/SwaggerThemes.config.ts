import { SwaggerTheme, DefaultConfig } from "swagger-themes";

const theme: SwaggerTheme = new SwaggerTheme("v3");
const darkStyle: string = theme.getBuffer("dark"); // Getting a Style

const swaggerOptions: DefaultConfig = {
  explorer: true,
  customCss: darkStyle,
};

export default swaggerOptions;
