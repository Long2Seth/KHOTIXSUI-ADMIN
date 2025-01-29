import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
import { UserType } from "@/lib/admin/UserData";
import { ActionUserComponent } from "@/components/our-components/user/ActionUserComponent";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

export const columnsUser: ColumnDef<UserType>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => <div>{row.original.id}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "username",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="USER NAME" />
        ),
        cell: ({ row }) => (
            <div className="flex items-center">
                <Image
                    className="rounded-[6px] h-auto w-[40px]"
                    width={70}
                    height={10}
                    src={row.original.avatar}
                    alt="image"
                />
                <p className="px-2 text-description-color justify-center text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">
                    {row.getValue("username")}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "gender",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="GENDER" />
        ),
        cell: ({ row }) => <div>{row.getValue("gender")}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="EMAIL" />
        ),
        cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
        accessorKey: "phoneNumber",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="PHONE NUMBER" />
        ),
        cell: ({ row }) => <div className="text-start">{row.original.phoneNumber}</div>,
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="STATUS" />
        ),
        cell: ({ row }) => {
            const status = row.getValue("status") as number;
            const isStatusEnabled = status === 1;
            return (
                <Badge
                    className={`rounded-[6px] text[10px] md:text-base justify-center font-normal ${
                        isStatusEnabled
                            ? "bg-label-free text-label-text-primary hover:bg-label-free/90"
                            : "bg-label-paid text-label-text-primary hover:bg-label-paid/90"
                    }`}
                >
                    {isStatusEnabled ? "Enable" : "Disable"}
                </Badge>
            );
        },
    },
    {
        accessorKey: "action",
        header: () => <div></div>,
        cell: ({ row }) => <ActionUserComponent uuid={row.original.id} username={row.original.username} status={row.original.status}/>,
    },
];