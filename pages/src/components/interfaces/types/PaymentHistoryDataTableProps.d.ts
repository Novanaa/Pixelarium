import PaymentHistory from "@/interfaces/types/PaymentHistory";
import { Table } from "@tanstack/react-table";

export default interface PaymentHistoryDataTableProps {
  table: Table<PaymentHistory>;
}
