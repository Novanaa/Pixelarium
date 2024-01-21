type TokenPaymentDataPayload = {
  transaction_details: TransactionDetails;
  item_details: ItemDetail;
  credit_card: CreditCardData;
};

type TransactionDetails = {
  order_id: string;
  gross_amount: number;
};

type ItemDetail = {
  id: string;
  price: number;
  quantity: number;
  name: string;
};

type CreditCardData = {
  secure: boolean;
};

export default TokenPaymentDataPayload;
