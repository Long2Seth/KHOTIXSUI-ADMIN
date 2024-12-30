'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoMdMore } from "react-icons/io";
import { Edit, Trash2, Power } from "lucide-react";
import {UserType} from "@/lib/admin/UserData";

type ActionUserComponentProps = {
    user: UserType;
};

export function ActionUserComponent({ user }: ActionUserComponentProps) {
    // The component implementation
    const isEnabled = user.status === "enabled";
    const actionText = isEnabled ? "Disable" : "Enable";
    const actionIcon = <Power className="mr-2" size={16} />;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" className="p-2">
                    <IoMdMore className="w-5 h-5 text-gray-500 cursor-pointer" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
                <div className="flex flex-col p-2 w-full">

                    {/* Edit Action */}
                    <div
                        onClick={() => navigator.clipboard.writeText(user.id)}
                        className="text-sm text-yellow-600 text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center p-1"
                    >
                        <Edit className="mr-2" size={16} />
                        <p className="w-[100px] px-1">Edit</p>
                    </div>

                    {/* Delete Action */}
                    <div
                        onClick={() => navigator.clipboard.writeText(user.id)}
                        className="text-sm text-red-500 text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center p-1"
                    >
                        <Trash2 className="mr-2" size={16} />
                        <p className="w-[100px] px-1">Delete</p>
                    </div>

                    {/* Enable/Disable Action */}
                    <div
                        onClick={() => navigator.clipboard.writeText(user.id)}
                        className={`text-sm ${
                            isEnabled ? "text-gray-500" : "text-green-500"
                        } text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center p-1`}
                    >
                        {actionIcon}
                        <p className="w-[100px] px-1">{actionText}</p>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
