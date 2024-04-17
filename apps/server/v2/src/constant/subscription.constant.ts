import { Injectable } from "@nestjs/common";
import { OrderStatus, UserPlan } from "@prisma/client";

@Injectable()
export class SubscriptionConstant {
  public static USERPLAN: Array<UserPlan> = [
    "Diamond",
    "Gold",
    "Netherite",
    "None",
  ];

  public static ORDER_STATUS: Array<OrderStatus> = [
    "Failed",
    "Pending",
    "Success",
  ];
}
