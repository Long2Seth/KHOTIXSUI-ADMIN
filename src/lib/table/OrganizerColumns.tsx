"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";
import {Organizer} from "@/lib/definitions";


export const OrganizerColumns: ColumnDef<Organizer>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "user",
        header: () => <div className="text-center">User</div>,
        cell: ({row}) => {
            const user:string = row.getValue("user");
            return (
                <div className="flex justify-center m-0 p-0">
                    <Image
                        src={user}
                        alt={user}
                        width={32}
                        height={32}
                        className=""
                    />
                </div>
            );
        }
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phoneNumber",
        header: "Phone number",
    },
    {
        accessorKey: "status",
        header: () => <div className="text-center">Status</div>,
        cell: ({row}) => {
            const status = row.getValue("status")
            let buttonStyle = "";
            let buttonText = "";

            // Apply different styles based on the status value
            if (status === "enabled") {
                buttonStyle = "bg-green-500 text-white";
                buttonText = "Enabled";
            } else if (status === "disabled") {
                buttonStyle = "bg-red-500 text-white";
                buttonText = "Disabled";
            } else {
                buttonStyle = "bg-gray-500 text-white";
                buttonText = "Unknown";
            }

            return (
                <div className="text-center">
                    <button className={`px-3 py-1 rounded-md ${buttonStyle}`}>
                        {buttonText}
                    </button>
                </div>
            )
        },
    }
]
