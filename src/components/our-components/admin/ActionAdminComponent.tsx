'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoMdMore } from "react-icons/io";
import { Edit, Trash2, Power } from "lucide-react";
import { useEnableUserMutation, useDisableUserMutation } from "@/redux/feature/user/Admin";

type ActionAdminComponentProps = {
    uuid: string;
    username: string;
    status: number;
};

export function ActionAdminComponent({ uuid, status }: ActionAdminComponentProps) {
    const [adminStatus, setAdminStatus] = useState(status);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [enableUser] = useEnableUserMutation();
    const [disableUser] = useDisableUserMutation();

    const handleStatusChange = () => {
        if (adminStatus === 1) {
            disableUser(uuid)
                .unwrap()
                .then(() => setAdminStatus(0))
                .catch(error => console.error("Error updating status:", error));
        } else {
            enableUser(uuid)
                .unwrap()
                .then(() => setAdminStatus(1))
                .catch(error => console.error("Error updating status:", error));
        }
    };

    const actionText = adminStatus === 1 ? "Disable" : "Enable";
    const actionIcon = <Power className="mr-2" size={16} />;

    return (
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
                <Button variant="ghost" className="p-2" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    <IoMdMore className="w-5 h-5 text-gray-500 cursor-pointer" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
                <div className="flex flex-col p-2 w-full">

                    {/* Edit Action */}
                    <div
                        onClick={() => {
                            navigator.clipboard.writeText(uuid);
                            setIsPopoverOpen(false);
                        }}
                        className="text-sm text-gray-600 text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center p-1"
                    >
                        <Edit className="mr-2" size={16} />
                        <p className="w-[100px] px-1">Edit</p>
                    </div>

                    {/* Enable/Disable Action */}
                    <div
                        onClick={() => {
                            handleStatusChange();
                            setIsPopoverOpen(false);
                        }}
                        className={`text-sm ${
                            adminStatus === 1 ? "text-gray-600" : "text-gray-600"
                        } text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center p-1`}
                    >
                        {actionIcon}
                        <p className="w-[100px] px-1">{actionText}</p>
                    </div>

                    {/* Delete Action */}
                    <div
                        onClick={() => {
                            navigator.clipboard.writeText(uuid);
                            setIsPopoverOpen(false);
                        }}
                        className="text-sm text-red-500 text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center p-1"
                    >
                        <Trash2 className="mr-2" size={16} />
                        <p className="w-[100px] px-1">Delete</p>
                    </div>

                </div>
            </PopoverContent>
        </Popover>
    );
}