
import {ColumnDef} from "@tanstack/react-table";
import React from "react";
import {FeedbackType} from "@/lib/admin/Feedback";

export const columnsFeedback: ColumnDef<FeedbackType>[] = [
    {
        accessorKey: "ID",
        header: () => <div className="min-w-[150px] xl:mi">ID</div>,
        cell: ({row}) => <div>{row.original.id}</div>,
    },
    {
        accessorKey: "name",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">USER NAME</div>,
        cell: ({row}) => <div>{row.original.name}</div>,
    },{
        accessorKey: "email",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">EMAIL</div>,
        cell: ({row}) => <div>{row.original.email}</div>,
    },
    {
        accessorKey: "createDate",
        header: () => <div className="min-w-[200px] md:min-w-[250px] text-start">DATE</div>,
        cell: ({row}) => <div className="text-start my-3 ">{row.original.createDate}</div>,
    },
];