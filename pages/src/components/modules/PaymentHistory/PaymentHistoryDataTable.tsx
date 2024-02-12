"use client";

import {
  Table as ITable,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getUserPaymentHistoryData, {
  type PaymentHistoryResponseAPI,
} from "@/services/getUserPaymentHistoryData";
import PaymentHistory from "@/interfaces/types/PaymentHistory";
import React, { use } from "react";
import { columns } from "./columnsDefinition";
import PaymentHistoryDataTableProps from "@/components/interfaces/types/PaymentHistoryDataTableProps";
import { Skeleton } from "@/components/ui/skeleton";
import { HiBookOpen } from "react-icons/hi";
import { HeadingThree } from "@/components/ui/Typographies/Heading";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import { Button } from "@/components/ui/button";
import { RocketIcon, UploadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Balancer } from "react-wrap-balancer";

const paymentHistoryQuery: Promise<PaymentHistoryResponseAPI | null> =
  getUserPaymentHistoryData();
export default function PaymentHistoryDataTable(): React.ReactElement {
  const paymentHistory: PaymentHistoryResponseAPI | null =
    use(paymentHistoryQuery);

  const userHistoriesLists: Array<PaymentHistory> | undefined =
    paymentHistory?.data.histories;

  const table: ITable<PaymentHistory> = useReactTable({
    data: userHistoriesLists!,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="mt-3 flex w-full flex-col gap-3 rounded-lg pb-24 sm:w-[96.5%]">
      {paymentHistory ? (
        !userHistoriesLists?.length ? (
          <EmptyPaymentHistory />
        ) : (
          <DataTable table={table} />
        )
      ) : (
        <Loading />
      )}
    </section>
  );
}

function DataTable({
  table,
}: PaymentHistoryDataTableProps): React.ReactElement {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function Loading(): React.ReactElement {
  return (
    <div>
      <div className="rounded-md border">
        <Skeleton className="h-[15rem] w-full" />
      </div>
    </div>
  );
}

function EmptyPaymentHistory(): React.ReactElement {
  const router: AppRouterInstance = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-1 @container">
      <HiBookOpen className="h-28 w-28" />
      <Balancer>
        <HeadingThree>
          All your purchases and payments in one place.
        </HeadingThree>
      </Balancer>
      <Balancer>
        <Paragraph className="text-center font-medium text-primary/70">
          Monitor everything you do with Pixelarium here.{" "}
          <span className="text-primary/100">Let&apos;s begin.</span>
        </Paragraph>
      </Balancer>
      <div className="mt-3 flex w-full flex-col gap-3 @md:w-fit @md:flex-row">
        <Button className="font-medium" onClick={() => router.push("/pricing")}>
          <RocketIcon className="mr-2 h-4 w-4" />
          Upgrade Your Plan
        </Button>
        <Button
          className="font-medium"
          variant="secondary"
          onClick={() => router.push("/profile/user?active=upload")}
        >
          <UploadIcon className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </div>
    </div>
  );
}
