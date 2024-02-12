import PaymentHistory, {
  Amount,
  PaymentHistoryStatus,
} from "@/interfaces/types/PaymentHistory";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import capitalize from "capitalize";
import moment from "moment";

export const columns: Array<ColumnDef<PaymentHistory>> = [
  {
    accessorKey: "order_id",
    header: "Order Id",
  },
  {
    accessorKey: "interval_count",
    header: "Interval",
  },
  {
    accessorKey: "plan",
    header: "Ordered Plan",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (c) =>
      c.getValue<PaymentHistoryStatus>()
        ? capitalize(c.getValue<PaymentHistoryStatus>())
        : c.getValue<PaymentHistoryStatus>(),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (c: CellContext<PaymentHistory, unknown>) =>
      `${c.getValue<Amount>().USD} (${new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(c.getValue<Amount>().IDR)})`,
  },
  {
    accessorKey: "order_date",
    header: "Order Date",
    cell: (c: CellContext<PaymentHistory, unknown>) =>
      moment(new Date(c.getValue<Date>()).getTime()).format("LL"),
  },
];
