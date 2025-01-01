'use client';

import {ColumnDef} from "@tanstack/react-table";
import {Badge} from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
import {EventType} from "@/lib/admin/Event";
import {ActionEventComponent} from "@/components/admin/event/ActionEventComponent";


export const columnEvent: ColumnDef<EventType>[] = [
    {
        accessorKey: "id",
        header: () => <div className="min-w-[130px] xl:mi">ID</div>,
        cell: ({row}) => <div>{row.getValue("id") as string}</div>,
    },
    {
        accessorKey: "createBy",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">CREATED BY</div>,
        cell: ({row}) => <div>{row.original.createBy}</div>,
    },
    {
        accessorKey: "createDate",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">CREATED DATE</div>,
        cell: ({row}) => <div>{row.original.createDate}</div>,
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
                    {row.original.eventName}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "location",
        header: () => <div className="min-w-[200px] md:min-w-[250px] xl:min-w-[330px] text-start">CATEGORY</div>,
        cell: ({row}) => <div className="text-start">{row.original.category}</div>,
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
    },
    {
        accessorKey: "location",
        header: () => <div className="min-w-[200px] md:min-w-[250px] xl:min-w-[330px] text-start">LOCATION</div>,
        cell: ({row}) => <div className="text-start">{row.getValue("location") as string}</div>,
    },
    {
        accessorKey: "status",
        header: () => <div className="min-w-[100px] md:min-w-[200px] text-start">STATUS</div>,
        cell: ({row}) => (
            <Badge
                className={`rounded-[6px] text[10px] md:text-base justify-center font-normal ${row.original.status === 'enable' ? 'bg-label-free text-label-text-primary hover:bg-label-free/90' : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'}`}>{row.original.status === 'enable' ? 'Enable' : 'Disable'}</Badge>
        )
    },
    {
        accessorKey: "action",
        header: () => <div className=" text-start"></div>,
        cell: ({row}) =>  <ActionEventComponent event={row.original} />
    },
];