import { Injectable } from "@nestjs/common";
import { WelcomeResponse } from "./model/app.model";

@Injectable()
export class AppService {
  welcome(): WelcomeResponse {
    return {
      name: "Pixelarium",
      messege: "Welcome to Pixelarium!",
      about: "The Infinite Pixels Experience.",
      author: "Kadek Nova",
      launched: 2024,
      version: "1.0.0",
      license: "MIT",
    };
  }
}
