import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/lib/definitions";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react"; // Import icons
import { Edit, Trash2, Power } from "lucide-react"; // Additional icons for actions

export const userColumns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "user",
        header: () => <div className="text-center">User</div>,
        cell: ({ row }) => {
            const user: string = row.getValue("user");
            return (
                <div className="flex justify-center m-0 p-0">
                    <Image src={user} alt={user} width={32} height={32} className="" />
                </div>
            );
        },
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
        cell: ({ row }) => {
            const status = row.getValue("status");
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
            );
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            // Check the status and set the action accordingly
            const isEnabled = payment.status === "enabled";
            const actionText = isEnabled ? "Disable" : "Enable";
            const actionIcon = isEnabled ? <Power /> : <Power />; // Power icon for both

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <MoreVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {/* Edit action with yellow color */}
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                            className="text-label-free"
                        >
                            <Edit className="mr-2" size={16} /> Edit
                        </DropdownMenuItem>
                        {/* Delete action with red color */}
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                            className="text-red-500"
                        >
                            <Trash2 className="mr-2" size={16} /> Delete
                        </DropdownMenuItem>
                        {/* Disable/Enable action with gray/green color */}
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                            className={isEnabled ? "text-enabled-color" : "text-green-500"}
                        >
                            {actionIcon}
                            {actionText}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
