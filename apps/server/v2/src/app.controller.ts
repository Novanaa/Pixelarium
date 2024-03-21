import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { WelcomeResponse } from "./model/app.model";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  welcome(): WelcomeResponse {
    return this.appService.welcome();
  }
}
