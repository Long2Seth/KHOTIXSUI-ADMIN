"use client";

import {ColumnDef} from "@tanstack/react-table";
import {Badge} from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
import {UserPaymentType} from "@/lib/admin/UserPaymentData";

export const columnsPayment: ColumnDef<UserPaymentType>[] = [
    {
        accessorKey: "id",
        header: () => <div className="min-w-[130px] xl:mi">ID</div>,
        cell: ({row}) => <div>{row.getValue("id") as string}</div>,
    },
    {
        accessorKey: "userName",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">USER NAME</div>,
        cell: ({row}) => <div>{row.original.username}</div>,
    },
    {
        accessorKey: "gender",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">GENDER</div>,
        cell: ({row}) => <div>{row.original.gender}</div>,
    },
    {
        accessorKey: "eventName",
        header: () => <div className="min-w-[300px] md:min-w-[400px] xl:min-w-[500px] pl-20 text-start">EVENT
            NAME</div>,
        cell: ({row}) => (
            <div className=" flex items-center ">
                <Image
                    className="rounded-[6px] h-auto w-[50px] md:w-[70px] "
                    width={70}
                    height={10}
                    src={row.original.image}
                    alt="image"/>
                <p className="px-2 lg:w-[500px] text-description-color justify-center text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">
                    {row.original.event}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "location",
        header: () => <div className="min-w-[200px] md:min-w-[250px] xl:min-w-[330px] text-start">LOCATION</div>,
        cell: ({row}) => <div className="text-start">{row.getValue("location") as string}</div>,
    },
    {
        accessorKey: "qty",
        header: () => <div className="min-w-[100px] md:min-w-[150px] text-start pl-5 md:pl-10">QTY</div>,
        cell: ({row}) => <div className="text-start pl-5 md:pl-10">{row.getValue("qty") as number}</div>,
    },
    {
        accessorKey: "price",
        header: () => <div className="min-w-[100px] md:min-w-[150px] text-start">PRICE</div>,
        cell: ({row}) => <div
            className="text-start font-semibold text-green-600 ">{"$" + (row.getValue("price") as number)}</div>,
    },
    {
        accessorKey: "total",
        header: () => <div className="min-w-[100px] md:min-w-[200px] text-start">TOTAL</div>,
        cell: ({row}) => {
            const qty = row.getValue("qty") as number;
            const price = row.getValue("price") as number;
            return <div className="text-start font-semibold text-green-600">{"$" + (qty * price)}</div>;
        },
    },
    {
        accessorKey: "endDate",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">PAYMENT METHOD</div>,
        cell: ({row}) => <div>{row.getValue("endDate") as string}</div>,
    },
    {
        accessorKey: "endDate",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">PAYMENT DATE</div>,
        cell: ({row}) => <div>{row.original.paymentDate}</div>,
    },
    {
        accessorKey: "ticketType",
        header: () => <div className="min-w-[100px] md:min-w-[200px] text-start">TICKET TYPE</div>,
        cell: ({row}) => (
            <Badge
                className={`text-secondary-color-text text-start text-[10px] justify-center md:text-sm font-light rounded-[6px] min-w-[60px] ${row.original.ticketType === 'VIP' ? 'bg-label-vip hover:bg-label-vip/90' : row.original.ticketType === 'PREMIUM' ? 'bg-label-premium hover:bg-label-premium/90' : row.original.ticketType === 'REGULAR' ? 'bg-label-regular hover:bg-label-regular/90' : row.original.ticketType === 'FREE' ? 'bg-label-free hover:bg-label-free/90' : ''}`}>
                {row.original.ticketType}
            </Badge>
        ),
    },
    {
        accessorKey: "startDate",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">START DATE</div>,
        cell: ({row}) => <div>{row.getValue("startDate") as string}</div>,
    },
    {
        accessorKey: "endDate",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">END DATE</div>,
        cell: ({row}) => <div>{row.getValue("endDate") as string}</div>,
    }
];