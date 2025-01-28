import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { FeedbackType } from "@/lib/admin/Feedback";
import { ActionFeedbackComponent } from "@/components/our-components/feedback/ActionFeedback";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

export const columnsFeedback: ColumnDef<FeedbackType>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] xl:mi" column={column} title="ID" />
        ),
        cell: ({ row }) => <div>{row.original.id}</div>,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]" column={column} title="USER NAME" />
        ),
        cell: ({ row }) => <div>{row.original.name}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]" column={column} title="EMAIL" />
        ),
        cell: ({ row }) => <div>{row.original.email}</div>,
    },
    {
        accessorKey: "createAt",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[200px] md:min-w-[250px] text-start" column={column} title="DATE" />
        ),
        cell: ({ row }) => <div className="text-start my-3">{row.original.createdAt}</div>,
    },
    {
        accessorKey: "message",
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[200px] md:min-w-[250px] xl:min-w-[300px]" column={column} title="DESCRIPTION" />
        ),
        cell: ({ row }) => <div className="line-clamp-2">{row.original.message}</div>,
    },
    {
        accessorKey: "action",
        header: () => <div className="text-start"></div>,
        cell: ({ row }) => <ActionFeedbackComponent data={row.original} />,
    },
];