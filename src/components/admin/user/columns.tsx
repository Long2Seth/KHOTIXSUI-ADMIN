
import {ColumnDef} from "@tanstack/react-table";
import {Badge} from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
import {UserType} from "@/lib/admin/UserData";
import {ActionUserComponent} from "@/components/admin/user/ActionUserComponent";

export const columnsUser: ColumnDef<UserType>[] = [
    {
        accessorKey: "ID",
        header: () => <div className="min-w-[150px] xl:mi">ID</div>,
        cell: ({row}) => <div>{row.original.id}</div>,
    },
    {
        accessorKey: "username", // Ensure this matches the key in your data
        header: () => <div className="min-w-[200px] md:min-w-[300px] xl:min-w-[300px] text-start">USER NAME</div>,
        cell: ({row}) => (
            <div className="flex items-center">
                <Image
                    className="rounded-[6px] h-auto w-[40px]"
                    width={70}
                    height={10}
                    src={row.original.image}
                    alt="image"
                />
                <p className="px-2 text-description-color justify-center text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">
                    {row.original.username}
                </p>
            </div>
        ),
        // filterFn: 'includesString',
    },
    {
        accessorKey: "gender",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">GENDER</div>,
        cell: ({row}) => <div>{row.original.gender}</div>,
    },{
        accessorKey: "email",
        header: () => <div className="min-w-[150px] md:min-w-[180px] xl:min-w-[200px]">EMAIL</div>,
        cell: ({row}) => <div>{row.original.email}</div>,
    },
    {
        accessorKey: "phone Number",
        header: () => <div className="min-w-[200px] md:min-w-[250px] text-start">PHONE NUMBER</div>,
        cell: ({row}) => <div className="text-start">{row.original.phoneNumber}</div>,
    },
    {
        accessorKey: "status",
        header: () => <div className="min-w-[100px] md:min-w-[200px] text-start">STATUS</div>,
        cell: ({row}) => (
            <Badge
                className={`rounded-[6px] text[10px] md:text-base justify-center font-normal ${row.original.status.toLowerCase() === 'enable' ? 'bg-label-free text-label-text-primary hover:bg-label-free/90' : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'}`}>{row.original.status === 'enable' ? 'Enable' : 'Disable'}</Badge>
        )
    },
    {
        accessorKey: "action",
        header: () => <div className="min-w-[100px]"></div>,
        cell: ({row}) => <ActionUserComponent user={row.original}/>
    }
];