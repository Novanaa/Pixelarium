import { Favorite, PaymentsHistory, Picture } from "@prisma/client";
import { OrderAmount } from "@/cores/payment-history/providers/add-history/add-history";

export interface UserFavoritesPictures extends Favorite {
  pictures: Array<Picture>;
}

export interface UserGallery extends Gallery {
  pictures: Array<Picture>;
}

export interface UserPaymentHistory extends PaymentsHistory {
  amount: OrderAmount;
}
