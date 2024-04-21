import { RetrieveUserPaymentHistoryProvider } from "./retrieve-history/retrieve-history.provider";
import { AddUserPaymentHistoryProvider } from "./add-history/add-history.provider";
import { UpdatePaymentHistoryProvider } from "./update-history/update-history.provider";

export {
  RetrieveUserPaymentHistoryProvider,
  AddUserPaymentHistoryProvider,
  UpdatePaymentHistoryProvider,
};

export default [
  RetrieveUserPaymentHistoryProvider,
  AddUserPaymentHistoryProvider,
  UpdatePaymentHistoryProvider,
];
