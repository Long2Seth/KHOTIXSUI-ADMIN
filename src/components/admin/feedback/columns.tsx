
import {ColumnDef} from "@tanstack/react-table";
import React from "react";
import {FeedbackType} from "@/lib/admin/Feedback";
import {ActionFeedbackComponent} from "@/components/admin/feedback/ActionFeedback";

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
    {
        accessorKey: "description",
        header: () => <div className="min-w-[200px] md:min-w-[250px] xl:min-w-[300px]">Description</div>,
        cell: ({row}) => <div className=" line-clamp-2">{row.original.description}</div>,
    },
    {
        accessorKey: "action",
        header: () => <div className=" text-start"></div>,
        cell: ({row}) =>  <ActionFeedbackComponent data={row.original}/>
    },
];