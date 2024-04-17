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

  public static ORDERID_PATTERN: RegExp =
    /plxmoid-[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/;

  public static PLAN_PRICES = {
    gold: 2.99,
    diamond: 6.99,
    netherite: 9.99,
  };
}
