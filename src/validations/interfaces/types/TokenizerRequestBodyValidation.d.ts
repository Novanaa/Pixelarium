import { plan } from "../../../../generated/client";

type TokenizerRequestBodyValidation = {
  data: {
    items_details: ItemsDetails;
    interval_count_in_month: number;
  };
};

type ItemsDetails = {
  price: number;
  plan: plan;
  currency: "USD";
};

export default TokenizerRequestBodyValidation;
