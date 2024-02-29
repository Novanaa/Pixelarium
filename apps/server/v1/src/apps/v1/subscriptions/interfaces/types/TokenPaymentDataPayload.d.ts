type TokenPaymentDataPayload = {
  transaction_details: TransactionDetails;
  item_details: ItemDetail;
  credit_card: CreditCardData;
  expiry: Expiry;
  page_expiry: PageExpiry;
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

interface Expiry {
  start_time: string | Date;
  unit: string;
  duration: number;
}

interface PageExpiry {
  duration: number;
  unit: string;
}

export default TokenPaymentDataPayload;
