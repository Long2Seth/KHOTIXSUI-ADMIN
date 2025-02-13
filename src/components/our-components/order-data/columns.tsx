"use client";

import { ColumnDef } from "@tanstack/react-table";
import { OrderData } from "@/lib/admin/OrderDate";
import { Badge } from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

export const columnsOrder: ColumnDef<OrderData>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[130px] xl:min-w-[150px]" column={column} title="ID" />
        ),
        cell: ({ row }) => <div className="">{row.getValue("id") as string}</div>,
    },
    {
        accessorKey: "eventName",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[300px] md:min-w-[400px] xl:min-w-[500px] pl-20 text-start" column={column} title="EVENT NAME" />
        ),
        cell: ({ row }) => (
            <div className="flex items-center">
                <Image
                    className="rounded-[6px] h-auto w-[50px] md:w-[70px]"
                    width={70}
                    height={10}
                    src={row.original.image}
                    alt="image"
                />
                <p className="px-2 lg:w-[500px] text-description-color justify-center text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">
                    {row.original.eventName}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "startDate",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]" column={column} title="START DATE" />
        ),
        cell: ({ row }) => <div>{row.getValue("startDate") as string}</div>,
    },
    {
        accessorKey: "endDate",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]" column={column} title="END DATE" />
        ),
        cell: ({ row }) => <div>{row.getValue("endDate") as string}</div>,
    },
    {
        accessorKey: "location",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[200px] md:min-w-[250px] xl:min-w-[330px] text-start" column={column} title="LOCATION" />
        ),
        cell: ({ row }) => <div className="text-start">{row.getValue("location") as string}</div>,
    },
    {
        accessorKey: "qty",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[200px] text-start" column={column} title="QTY" />
        ),
        cell: ({ row }) => <div className="text-start">{row.getValue("qty") as number}</div>,
    },
    {
        accessorKey: "price",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[200px] text-start" column={column} title="PRICE" />
        ),
        cell: ({ row }) => (
            <div className="text-start font-semibold text-green-600">
                {"$" + (row.getValue("price") as number)}
            </div>
        ),
    },
    {
        accessorKey: "total",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[200px] text-start" column={column} title="TOTAL" />
        ),
        cell: ({ row }) => {
            const qty = row.getValue("qty") as number;
            const price = row.getValue("price") as number;
            return <div className="text-start font-semibold text-green-600">{"$" + (qty * price)}</div>;
        },
    },
    {
        accessorKey: "ticketType",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[200px] text-start" column={column} title="TICKET TYPE" />
        ),
        cell: ({ row }) => (
            <Badge
                className={`text-secondary-color-text text-start text-[10px] justify-center md:text-sm font-light rounded-[6px] min-w-[60px] ${
                    row.original.ticketType === "VIP"
                        ? "bg-label-vip hover:bg-label-vip/90"
                        : row.original.ticketType === "PREMIUM"
                            ? "bg-label-premium hover:bg-label-premium/90"
                            : row.original.ticketType === "REGULAR"
                                ? "bg-label-regular hover:bg-label-regular/90"
                                : row.original.ticketType === "FREE"
                                    ? "bg-label-free hover:bg-label-free/90"
                                    : ""
                }`}
            >
                {row.original.ticketType}
            </Badge>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[100px] md:min-w-[200px] text-start" column={column} title="STATUS" />
        ),
        cell: ({ row }) => (
            <Badge
                className={`rounded-[6px] text[10px] md:text-base justify-center font-normal ${
                    row.original.status === "publish"
                        ? "bg-label-free text-label-text-primary hover:bg-label-free/90"
                        : "bg-label-paid text-label-text-primary hover:bg-label-paid/90"
                }`}
            >
                {row.original.status === "publish" ? "Publish" : "Unpublish"}
            </Badge>
        ),
    },
];